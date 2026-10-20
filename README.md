# Autom8edIT portfolio

Source for [autom8ed.me](https://autom8ed.me), the professional portfolio of
Joel Larsson, Senior SRE and Infrastructure Automation Engineer.

The site presents:

- nearly 20 years of enterprise and small-business infrastructure experience;
- cross-layer root-cause analysis across endpoint, identity, network, operating
  system, and application boundaries;
- Windows, Linux, macOS, Active Directory, networking, virtualization, and
  endpoint engineering;
- infrastructure automation using PowerShell, Bash, Python, C/C++, Go, and Rust;
- SREBrain, a platform- and model-agnostic verifier-first SRE project;
- GodBrain, the Windows-first research lab behind the deeper automation work.

[View the portfolio](https://autom8ed.me) |
[Read the resume](https://autom8ed.me/resume/) |
[Explore SREBrain](https://github.com/autom8edIT/SREBrain)

## Theme checks

The portfolio and resume share a charcoal/off-white/blue palette, default to dark,
and remember the selected theme through the existing browser-local toggle.
Print styles use a light background regardless of the selected screen theme.

Run the dependency-free regression checks with Node.js 18 or later:

```text
node --test tests/theme.test.cjs
```

These cover theme selection, blocked browser storage, cross-page persistence,
palette parity, text contrast and the code-block/print styling contracts.
For visual changes, also check `/`, `/resume/` and the `/cv/` redirect in a
browser, including narrow screens, keyboard focus, both themes and print.
The site remains static GitHub Pages/Jekyll; Node.js is only used to run checks.
