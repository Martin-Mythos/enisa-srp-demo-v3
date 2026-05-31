# ENISA SRP Demo v3 — Final Candidate

## Final Conclusion

This is the selected final ENISA SRP Demo v3 candidate. It promotes the Codex hybrid primary route after side-by-side evaluation against the GLM Plan-B route. It keeps the Codex route's maintainable engineering base and ports the stronger GLM/Gemini visual direction: cinematic launcher, dossier seal, artifact prominence, denser readiness dashboard, and an explicit internal-truth to observer-safe redaction narrative.

## Built Files

- `index.html`
- `p00-decision-gate.html`
- `workbench.html`
- `case-sharetable.html`
- `submission-snapshot.html`
- `evidence-receipt.html`
- `readiness-dashboard.html`
- `demo-observer.html`
- `design-system.html`
- `css/tokens.css`
- `css/layout.css`
- `css/components.css`
- `css/screens.css`
- `js/app-state.js`
- `js/interactions.js`
- `assets/`
- `qa-screenshots/`

## Preserved Business Semantics

- `srp.lang` persists EN/CN selection.
- `srp.state` persists `outcome`, `endorsement`, `packagePrepared`, `snapshot`, `receipt`, `utcAck`, `itAck`, and prepend-only audit events.
- P00 requires `reportable` + reviewer endorsement before P02 package work.
- P02 keeps one hard blocker plus acknowledgeable UTC and IT route gaps.
- P03 seals immutable `submitted_payload_snapshot`.
- P04 attaches `PortalReceiptEvidence` as `received_registered`.
- `received_registered` is registration only, not legal acceptance.
- P05 shows honest readiness and visible gaps, never a vanity 100% score.
- P06 uses server-side redaction semantics and shows included vs excluded disclosure lanes.
- No copy claims real ENISA integration or real regulator submission.

## How To View

```bash
python3 -m http.server 8131
```

Open:

```text
http://127.0.0.1:8131/index.html
```

## Published Links

- GitHub: https://github.com/Martin-Mythos/enisa-srp-demo-v3
- Vercel: https://enisa-srp-demo-v3.vercel.app/

## QA Summary

Playwright QA ran all 9 pages at `1440`, `1280`, `1024`, `968`, `768`, and `390` in both EN and CN. Final result: zero page-level horizontal overflow, zero missing images, zero footer occlusion. The historical regressions at `968 readiness-dashboard`, `390 p00-decision-gate`, and `390 case-sharetable` are fixed in both languages.

END_FINAL_ENISA_SRP_DEMO_V3
