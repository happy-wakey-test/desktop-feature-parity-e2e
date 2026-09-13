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

## Repository-local Git worktrees

- Create or use a Git worktree only when the human operator explicitly authorizes it for the current task. Concurrency or a dirty checkout is not permission by itself.
- Put every authorized worktree at `<repository-root>/tmp/worktrees/<name>`; from the repository root, use `./tmp/worktrees/<name>`. Never place worktrees beside repositories or organization directories.
- Keep `tmp`, `temp`, `tmp/worktrees`, and `temp/worktrees` ignored in the repository-root `.gitignore`. Do not commit files from those directories.
- Relocate or remove a worktree only when the operator explicitly requests it. Before removal, preserve and publish intended changes, verify its commit is represented on the target branch, and confirm there are no tracked, untracked, ignored-sensitive, or in-use files that must survive. Remove it with `git worktree remove <path>` without `--force`; never delete a worktree directory with `rm`.

<!-- BEGIN ores-agents-pointer: managed by ORESoftware/my-ai; edit there, not here -->

## Canonical agent instructions

Before doing anything else in this repository, also read:

    .ores/agents/AGENTS.md

That path is a symlink to `~/codes/oresoftware/my-ai/AGENTS.md`, whose canonical copy is
<https://github.com/ORESoftware/my-ai/blob/main/AGENTS.md>.

It exists at a fixed path *inside* the repository because some agents cannot walk up past
the repository root, so machine-wide instructions one or more directories above are
invisible to them. This pointer plus that path make the same file reachable from a working
directory anywhere in the tree.

The symlink is deliberately **not committed**: it names an absolute path that is only valid
on a machine with `~/codes/oresoftware/my-ai` checked out, so committing it would produce a
broken link for everyone else and for CI. `.ores/` is git-ignored for that reason. If
`.ores/agents/AGENTS.md` is missing on your machine, create it with:

    mkdir -p .ores/agents
    ln -sfn "$HOME/codes/oresoftware/my-ai/AGENTS.md" .ores/agents/AGENTS.md

or run `~/codes/oresoftware/my-ai/scripts/link-repo-agents.sh` once to do it for every git
repository under `~/codes`, and `--check` to verify them.

A missing `.ores/agents/AGENTS.md` is a setup gap on the reader's machine, never a reason to
skip the canonical instructions: fetch them from the URL above instead.

<!-- END ores-agents-pointer -->
