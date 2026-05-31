# Artifact Manifest

## Canonical Bitmap Assets

| File | Role | Page | Dimensions |
|---|---|---|---|
| `assets/launcher-bg-plate.png` | Launcher cinematic background plate | `index.html` | 1672 x 941 |
| `assets/dossier-seal.png` | Tamper-evident dossier / seal hero object | `index.html` | 1024 x 1024 |
| `assets/readiness-radar.png` | Multi-axis readiness radar | `readiness-dashboard.html` | 1254 x 1254 |
| `assets/receipt-semantics-card.png` | Receipt semantics visual: registered, not accepted | `evidence-receipt.html` | 1448 x 1086 |
| `assets/redaction-boundary.png` | Internal truth to observer-safe proof boundary | `demo-observer.html` | 1774 x 887 |
| `assets/sealed-package-card.png` | Sealed ShareTable reporting package | `case-sharetable.html` | 1024 x 1024 |
| `assets/snapshot-lock.png` | Immutable submitted payload snapshot lock | `submission-snapshot.html` | 1254 x 1254 |
| `assets/shared-status-icons.png` | Shared object/status icon sheet | `design-system.html` | 1672 x 941 |

## Asset Rules

- Critical text is rendered in HTML, not baked into bitmap assets.
- No `00_visual-assets/` reference screen is embedded in production pages.
- All production assets are local to this output directory.
- Canonical filename `sealed-package-card.png` is used.
- `dossier-seal.png` and `shared-status-icons.png` are present.
- Wide assets are framed with `overflow:hidden` and stable aspect ratios.

## Source Notes

- The implementation base came from the completed Codex route.
- `dossier-seal.png` and `sealed-package-card.png` were sourced from the GLM/Gemini visual pool.
- Other canonical assets were preserved from the Codex first-batch bitmap set.
