# desktop-feature-parity-e2e

External Happy Wakey desktop feature-parity tests in the sibling
[`happy-wakey-test`](https://github.com/happy-wakey-test) org. This repository
does not own production identity or deploy state. It pins Flutter and Qt
revisions and fails when destination labels, BLE preview commands, or URL
safety drift.

Product PRs:

- https://github.com/happy-wakey/happy-wakey-flutter/pull/3
- https://github.com/happy-wakey/happy-wakey-desktop-app.rs/pull/2
- https://github.com/happy-wakey/happy-wakey-e2e/pull/5

## Run

```sh
node --test
```

With product checkouts:

```sh
HAPPY_WAKEY_FLUTTER_ROOT=~/codes/happy-wakey/happy-wakey-flutter \
HAPPY_WAKEY_DESKTOP_ROOT=~/codes/happy-wakey/happy-wakey-desktop-app.rs \
node --test
```

Never place tokens, cookies, or customer fixtures here.
