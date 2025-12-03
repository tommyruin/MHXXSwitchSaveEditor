# Repository Guidelines

## Project Structure & Module Organization
- Dual project repo: C# WinForms app (`MHXXSaveEditor/`) and React/TS web app (`web/`).
- **C# project**: `MHXXSaveEditor.sln` opens the solution; UI in `Forms/` (`.cs` + `.Designer.cs` + `.resx`), game data/offsets in `Data/`, utilities in `Util/`.
- **Web project**: Vite + React + TypeScript; components in `src/components/`, parsers/types in `src/lib/`, item/equipment data in `src/lib/data/`.

## Build, Test, and Development Commands
**C#**: `msbuild MHXXSaveEditor/MHXXSaveEditor.csproj /p:Configuration=Debug` (or `/p:Configuration=Release`); run via `MHXXSaveEditor/bin/Debug/MHXXSaveEditor.exe`.  
**Web**: `cd web && npm install` then `npm run dev` (Vite dev server on port 5173), `npm run build` (production), `npm run preview` (preview prod build). No test suite; rely on manual smoke tests. Asset fetching: `npm run fetch-assets`.

## Coding Style & Naming Conventions
**C#**: Target .NET Framework 4.0; 4-space indent; PascalCase for types/methods, camelCase for locals/fields, ALL_CAPS for data constants (e.g., `SIZEOF_ITEMBOX`). Never edit `.Designer.cs` files manually. Use `readonly` for constants that can't be `const`. Opening brace on same line as method signature.  
**TypeScript**: 2-space indent; strict mode disabled; PascalCase for components/types/interfaces, camelCase for variables/functions. Organize imports: types from `./types`, then data from `./data/`, then utilities, then React components. Use `React.FC<Props>` for components. Use `as React.CSSProperties` when setting CSS custom properties.  
**Error handling**: C# uses try/catch with `MessageBox` alerts; TS uses thrown `Error` objects. Always validate offsets and buffer bounds before array operations to prevent save corruption.

## Commit & Pull Request Guidelines
- Commit style: imperative present-tense (`feat:`, `fix:`, `refactor:`); recent examples: `feat: Add hunter equipment grid component...`, `refactor: adjust item slot filling logic...`.
- PRs need: purpose, files touched, offset/data changes (critical for save compatibility), manual verification steps, screenshots for UI changes.
- When modifying offsets in `Data/Offsets.cs` or `src/lib/saveParser.ts`, document save format assumptions and test round-trip (load → edit → save → reload). Save sizes: 3DS=4726152, Switch=4726188, MHGU=5159100 bytes.
