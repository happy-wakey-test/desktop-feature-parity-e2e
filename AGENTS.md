# AGENTS.md — happy-wakey-test/desktop-feature-parity-e2e

## Parent / root agent contract

This file is **this repository's** agent contract. The fleet-wide parent lives at:

- GitHub: https://github.com/oresoftware/my-ai/AGENTS.md
- Disk: `~/codes/oresoftware/my-ai/AGENTS.md`

When this file and the parent disagree: follow **this file** for test-org pins
and desktop-parity contracts; follow the parent for org-wide git/Linear/GitHub
conventions.

Sibling product org: `github.com/happy-wakey`. Linear workspace:
https://linear.app/denman. Primary GitHub user: `ORESoftware`. Secondary:
`the1mills`.

## This repository

- GitHub org: [`happy-wakey-test`](https://github.com/happy-wakey-test)
- Repository: [`happy-wakey-test/desktop-feature-parity-e2e`](https://github.com/happy-wakey-test/desktop-feature-parity-e2e)
- Local checkout: `~/codes/happy-wakey-test/desktop-feature-parity-e2e`
- Kind: external/e2e coverage for Flutter and Qt desktop feature parity.
- Pins live in `source-pins.json` and must be immutable 40-character SHAs.

Do not log or commit secrets. Git: merge, never rebase/stash/reset unless a
human explicitly authorizes.

## Required validation

```sh
node --test
node scripts/assert-source-pins.mjs
```
