# Repository Guidelines

## Project Structure & Module Organization
- `MHXXSaveEditor.sln` opens the full WinForms solution; `MHXXSaveEditor/` holds all code.
- UI lives in `Forms/` (paired `.cs` and `.Designer.cs` partials with `.resx` resources).
- Game data/constants and offsets are in `Data/`; general helpers in `Util/`.
- App metadata and generated assets stay under `Properties/` and `Resources/`; deployment bits land in `publish/` after builds.

## Build, Test, and Development Commands
- Build (Debug): `msbuild MHXXSaveEditor/MHXXSaveEditor.csproj /p:Configuration=Debug` (requires .NET Framework 4.x toolchain/Visual Studio).
- Build (Release): `msbuild MHXXSaveEditor/MHXXSaveEditor.csproj /p:Configuration=Release`.
- Run locally: after a build, launch `MHXXSaveEditor/bin/Debug/MHXXSaveEditor.exe` (or `bin/Release`); the splash screen and main editor should load.
- If using Visual Studio, use the Debug/Release dropdown and `Build > Build Solution` for the same outputs.

## Coding Style & Naming Conventions
- C# codebase targeting .NET Framework 4.0; prefer 4-space indentation and trailing newline per file.
- Classes/structs/interfaces use PascalCase; local variables and private fields use camelCase; constants remain ALL_CAPS in the data maps.
- Designer files are auto-generated—avoid manual edits there; place hand-written logic in the paired `.cs` partial.
- Keep WinForms event handlers small; extract helpers into `Util/` when reusable.

## Testing Guidelines
- No automated test suite exists yet; rely on manual smoke tests per change.
- Minimum check: build succeeds in both Debug and Release, the app opens, and loading/saving a sample system file (see `Resources/CleanSave.txt` for structure hints) does not throw.
- For data changes (offsets/constants), verify a round-trip: load a save, tweak a field, save, and reopen to confirm persistence.
- If adding tests later, prefer MSTest/xUnit in a `Tests/` folder with method names describing behavior (`MethodName_State_ExpectedResult`).

## Commit & Pull Request Guidelines
- Existing history favors short, descriptive summaries (`Added mhgu support`, `Added Switch to 3DS converter`); keep commits focused and written in the imperative/present tense.
- PRs should include: purpose of the change, key implementation notes (files touched, risky areas like offset math), manual verification steps, and screenshots/gifs when UI is affected.
- Link related issues or save-format references when adjusting offsets/constants; call out breaking changes to existing saves or conversions.
