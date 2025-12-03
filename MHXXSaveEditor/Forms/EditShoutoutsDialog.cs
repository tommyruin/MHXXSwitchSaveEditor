using System;
using System.Text;
using System.Windows.Forms;
using MHXXSaveEditor.Data;
using MHXXSaveEditor.Util;

namespace MHXXSaveEditor.Forms
{
    public partial class EditShoutoutsDialog : Form
    {
        private MainForm MainForm;
        public EditShoutoutsDialog(MainForm mainForm)
        {
            InitializeComponent();
            MainForm = mainForm;
            LoadManualShoutouts();
            LoadAutomaticShoutouts();
        }

        /// <summary>
        /// Parse shoutouts from a byte array as consecutive null-terminated strings.
        /// Strings are stored within 60-byte conceptual slots but can span slot boundaries.
        /// </summary>
        private string[] ParseShoutouts(byte[] data, int count)
        {
            string[] result = new string[count];
            int pos = 0;
            const int SLOT_SIZE = 60;
            
            for (int i = 0; i < count; i++)
            {
                int slotStart = i * SLOT_SIZE;
                int slotEnd = slotStart + SLOT_SIZE;
                
                // Skip leading nulls within the current slot boundary
                while (pos < data.Length && pos < slotEnd && data[pos] == 0)
                {
                    pos++;
                }
                
                if (pos >= data.Length || pos >= slotEnd)
                {
                    // No text found in this slot
                    result[i] = "";
                    pos = slotEnd;
                    continue;
                }
                
                // Find next null terminator (can extend beyond slot boundary)
                int nullPos = Array.IndexOf(data, (byte)0, pos);
                if (nullPos == -1)
                {
                    nullPos = data.Length;
                }
                
                // Decode the string
                int length = nullPos - pos;
                result[i] = Encoding.UTF8.GetString(data, pos, length);
                pos = nullPos + 1;
            }
            
            return result;
        }

        /// <summary>
        /// Encode shoutouts into a byte array as consecutive null-terminated strings.
        /// </summary>
        private byte[] EncodeShoutouts(string[] shoutouts, int bufferSize)
        {
            byte[] result = new byte[bufferSize];
            int pos = 0;
            
            foreach (string text in shoutouts)
            {
                byte[] encoded = Encoding.UTF8.GetBytes(text);
                
                // Check if we have enough space (text + null terminator)
                if (pos + encoded.Length + 1 > result.Length)
                {
                    // Not enough space, stop here
                    break;
                }
                
                Array.Copy(encoded, 0, result, pos, encoded.Length);
                pos += encoded.Length;
                result[pos++] = 0; // null terminator
            }
            
            return result;
        }

        public void LoadManualShoutouts()
        {
            listViewManualShoutouts.Items.Clear();
            
            // Parse shoutouts as consecutive null-terminated strings
            string[] shoutouts = ParseShoutouts(MainForm.player.ManualShoutouts, Constants.TOTAL_MANUAL_SHOUTOUTS);
            
            for (int a = 0; a < shoutouts.Length; a++)
            {
                string[] arr = new string[2];
                arr[0] = (a + 1).ToString();
                arr[1] = shoutouts[a];
                ListViewItem sht = new ListViewItem(arr);
                listViewManualShoutouts.Items.Add(sht);
            }
            listViewManualShoutouts.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listViewManualShoutouts.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);
        }

        public void LoadAutomaticShoutouts()
        {
            listViewAutomaticShoutouts.Items.Clear();
            
            // Parse shoutouts as consecutive null-terminated strings
            string[] shoutouts = ParseShoutouts(MainForm.player.AutomaticShoutouts, Constants.TOTAL_AUTOMATIC_SHOUTOUTS);
            
            for (int a = 0; a < shoutouts.Length; a++)
            {
                string[] arr = new string[2];
                arr[0] = (a + 1).ToString();
                arr[1] = shoutouts[a];
                ListViewItem sht = new ListViewItem(arr);
                listViewAutomaticShoutouts.Items.Add(sht);
            }
            listViewAutomaticShoutouts.AutoResizeColumns(ColumnHeaderAutoResizeStyle.ColumnContent);
            listViewAutomaticShoutouts.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize);
        }

        private void TextBoxManualShoutouts_TextChanged(object sender, EventArgs e)
        {
            TextBox tb = (TextBox)sender;
            if (!tb.Focused)
            {
                return;
            }

            var mlc = new MaxLengthChecker();
            if (mlc.GetMaxLength(textBoxManualShoutouts.Text, 60))
                textBoxManualShoutouts.MaxLength = textBoxManualShoutouts.Text.Length;
        }

        private void TextBoxAutomaticShoutouts_TextChanged(object sender, EventArgs e)
        {
            TextBox tb = (TextBox)sender;
            if (!tb.Focused)
            {
                return;
            }

            var mlc = new MaxLengthChecker();
            if (mlc.GetMaxLength(textBoxAutomaticShoutouts.Text, 60))
                textBoxAutomaticShoutouts.MaxLength = textBoxAutomaticShoutouts.Text.Length;
        }

        private void ListViewAutomaticShoutouts_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listViewAutomaticShoutouts.SelectedItems.Count == 0) // Check if nothing was selected
                return;
            else
            {
                ListView ls = (ListView)sender;
                if (!ls.Focused)
                {
                    return;
                }
                textBoxAutomaticShoutouts.Text = listViewAutomaticShoutouts.SelectedItems[0].SubItems[1].Text;
            }
        }

        private void ListViewManualShoutouts_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listViewManualShoutouts.SelectedItems.Count == 0) // Check if nothing was selected
                return;
            else
            {
                ListView ls = (ListView)sender;
                if (!ls.Focused)
                {
                    return;
                }

                textBoxManualShoutouts.Text = listViewManualShoutouts.SelectedItems[0].SubItems[1].Text;
            }
        }

        private void ButtonManualShoutoutSet_Click(object sender, EventArgs e)
        {
            int selectedShoutout = Convert.ToInt32(listViewManualShoutouts.SelectedItems[0].SubItems[0].Text) - 1;

            // Parse all existing shoutouts
            string[] shoutouts = ParseShoutouts(MainForm.player.ManualShoutouts, Constants.TOTAL_MANUAL_SHOUTOUTS);
            
            // Update the selected one
            shoutouts[selectedShoutout] = textBoxManualShoutouts.Text;
            
            // Re-encode all shoutouts
            MainForm.player.ManualShoutouts = EncodeShoutouts(shoutouts, Constants.SIZEOF_MANUAL_SHOUTOUTS);
            
            // Update the list view
            listViewManualShoutouts.SelectedItems[0].SubItems[1].Text = textBoxManualShoutouts.Text;
            MessageBox.Show("Shoutout has been set");
        }

        private void ButtonAutomaticShoutoutSet_Click(object sender, EventArgs e)
        {
            int selectedShoutout = Convert.ToInt32(listViewAutomaticShoutouts.SelectedItems[0].SubItems[0].Text) - 1;

            // Parse all existing shoutouts
            string[] shoutouts = ParseShoutouts(MainForm.player.AutomaticShoutouts, Constants.TOTAL_AUTOMATIC_SHOUTOUTS);
            
            // Update the selected one
            shoutouts[selectedShoutout] = textBoxAutomaticShoutouts.Text;
            
            // Re-encode all shoutouts
            MainForm.player.AutomaticShoutouts = EncodeShoutouts(shoutouts, Constants.SIZEOF_AUTOMATIC_SHOUTOUTS);
            
            // Update the list view
            listViewAutomaticShoutouts.SelectedItems[0].SubItems[1].Text = textBoxAutomaticShoutouts.Text;
            MessageBox.Show("Shoutout has been set");
        }
    }
}
