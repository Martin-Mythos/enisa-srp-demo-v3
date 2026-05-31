# QA Report

## Automated QA

Static server:

```bash
python3 -m http.server 8131
```

Playwright checked:

- 9 pages
- 6 widths: `1440`, `1280`, `1024`, `968`, `768`, `390`
- 2 languages: EN and CN
- Total page/language/viewport checks: 108
- Plus one scripted guard-chain interaction test

Raw results:

- `qa-screenshots/qa-results.json`

## Result Matrix

| Gate | Result |
|---|---|
| Page-level horizontal overflow | Pass, zero failures |
| Missing images / 404 assets | Pass, zero failures |
| Footer occlusion | Pass, zero failures after static bottom dock fix |
| EN rendering | Pass |
| CN rendering | Pass |
| `968 readiness-dashboard` regression | Pass in EN and CN |
| `390 p00-decision-gate` regression | Pass in EN and CN |
| `390 case-sharetable` regression | Pass in EN and CN |
| P02 table containment | Pass: table overflow stays inside `.table-wrap` |
| `qa-results.json` saved | Pass |

## Guard Chain Test

Scripted sequence:

1. Reset `localStorage`.
2. Open P00 and confirm P02 CTA is locked.
3. Click reviewer endorsement.
4. Open P02, acknowledge UTC and IT gaps, prepare package.
5. Open P03 and generate immutable snapshot.
6. Open P04 and attach receipt evidence.

Final state:

```json
{
  "outcome": "reportable",
  "endorsement": "endorsed",
  "packagePrepared": true,
  "snapshot": true,
  "receipt": true,
  "utcAck": true,
  "itAck": true
}
```

Audit events in order:

1. `ReportabilityDecision DEC-001 endorsed`
2. `Sealed reporting package prepared`
3. `submitted_payload_snapshot sealed`
4. `PortalReceiptEvidence attached: received_registered`

## Screenshots

Screenshots were saved for `index`, `p00-decision-gate`, `case-sharetable`, `readiness-dashboard`, and `demo-observer` at every required width in both EN and CN.

