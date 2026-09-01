---
title: Joel Larsson
description: Senior SRE and Infrastructure Automation Engineer
---

# Joel Larsson

## Senior SRE and Infrastructure Automation Engineer

I diagnose and automate infrastructure across endpoint, identity, network,
operating system, and application boundaries. I bring nearly 20 years of
professional IT experience from enterprise consulting, managed services, legal,
healthcare, and research environments.

**Sweden | Open to global remote and contract opportunities | Swedish and English**

[View resume](./resume/) |
[GitHub](https://github.com/autom8edIT) |
[LinkedIn](https://www.linkedin.com/in/joel-larsson-562a3121) |
[Email](mailto:joel.larsson@autom8ed.me)

<button type="button" class="theme-toggle" data-theme-toggle aria-pressed="false">Flashbang mode</button>
<script src="/assets/js/theme.js" defer></script>

---

## What I deliver

### Root-cause analysis across layers

I work from evidence rather than repair checklists: client symptoms, DNS and
routing, identity, services, operating-system state, logs, hardware, and the
application path. The goal is not merely to restore service, but to identify the
failed layer and prove that the repair worked.

### Infrastructure automation

I turn repeated operational work into bounded, observable automation using
PowerShell, Bash, Python, C/C++, Go, and Rust. I favor explicit inputs, dry-run or
preview stages, audit history, rollback, and post-change verification.

### Enterprise systems

My background includes Windows and Linux administration, macOS, Active Directory,
Microsoft 365, Entra ID, Intune, PKI, VMware, Hyper-V, DNS, DHCP, routing,
switching, VLANs, VPN, Wi-Fi, servers, storage, deployment, and endpoint
engineering.

### Applied AI for operations

I build local-first agent systems that retrieve operational knowledge, inspect a
host, propose bounded actions, and verify outcomes. The language model is a
replaceable reasoning component. Authorization, policy, execution, and audit stay
in deterministic code.

I have used ChatGPT since its public launch and continuously evaluate newly
released open-weight models from Hugging Face alongside GitHub Copilot Max and
SuperGrok. I compare them on real SRE investigations, repository-scale coding,
tool use, context retention, and verifier-backed implementation rather than on
chat impressions alone.

### CLI-first engineering

My primary interfaces are PowerShell and Bash, supported by Git, APIs, compilers,
tests, and repeatable scripts. I use graphical interfaces when they expose a
signal that is inherently visual; routine administration and engineering should
remain observable, reproducible, and automatable.

---

## Featured project: SREBrain

[SREBrain](https://github.com/autom8edIT/SREBrain) is a platform- and
model-agnostic project built to create the ultimate SRE agent. In this project,
"ultimate" is not an unqualified superlative; it is a public set of acceptance
criteria covering diagnosis, authorization, verification, rollback, evidence,
and platform support.

### Engineering problem

Traditional support tools inspect isolated components. Generic AI assistants can
produce plausible advice but usually lack trustworthy host evidence, controlled
execution, and a verifier. SREBrain separates the portable operational contract
from any one model, interface, or operating system.

### Design

```text
detect
    -> diagnose
    -> plan
    -> authorize
    -> apply
    -> verify
    -> record
```

### Current capabilities

- Shared Go interfaces for diagnostics, plans, application, rollback, and
  evidence.
- Fixed read-only Windows and Linux diagnostic catalogs.
- No shell construction from operator or model text.
- Timestamped SHA-256 receipts for exact diagnostic output.
- Mutation methods that fail closed until the complete verifier contract exists.
- Windows and Linux CI from the first commit.

The first release is intentionally diagnose-only. A mutating action will ship
only when it has a checked-in allowlist entry, typed plan, authenticated policy
decision, postcondition verifier, rollback path, and failure fixtures.

[Explore SREBrain](https://github.com/autom8edIT/SREBrain)

---

## Research lab: GodBrain

[GodBrain](https://github.com/usrname1git/GodBrain) is the Windows-first research
lab where the deeper closed-loop runtime, native C++ kernel, local model
integration, operational knowledge boundary, and host-specific experiments are
developed.

SREBrain extracts the portable professional contract. GodBrain remains free to
push Windows B-line automation and local-agent research without making every
experiment part of the recruiter-facing product.

---

## Architecture case study: OmniContext

[OmniContext](https://github.com/autom8edIT/OmniContext) preserves the earlier
prototype and explains the engineering lessons that led to GodBrain and
SREBrain.

The case study covers:

- why direct model access to memory and execution was rejected,
- why raw data and reviewed operational knowledge need separate trust levels,
- why verification is more valuable than adding more agent nodes,
- how a model-specific prototype became a model-agnostic kernel boundary,
- how privileged automation can remain useful without becoming an uncontrolled
  remote shell.

---

## Experience highlights

- Led 20-30 technicians in an AstraZeneca enterprise Windows migration delivered
  in an IBM-led environment.
- Participated in infrastructure work for a Swedish Tax Agency data-center
  project.
- Built Windows domains, networks, servers, VPNs, and Wi-Fi environments from
  zero for small and medium-sized organizations.
- Owned IT strategy and daily operations as the sole technical decision-maker for
  a law firm.
- Supported demanding legal, healthcare, research, and enterprise environments.
- Reported a reproducible
  [Microsoft Intelligent Terminal defect](https://github.com/microsoft/intelligent-terminal/issues/328)
  that the product team accepted as a priority issue.

---

## How I work

1. Establish the observable failure and its blast radius.
2. Identify the layer that can explain the evidence.
3. Run the smallest distinguishing probe.
4. Apply the least invasive reversible correction.
5. Verify the original symptom and dependent services.
6. Record the evidence so the next incident starts from known facts.

This is also how I build automation: the verifier is part of the feature, not an
afterthought.

---

## Contact

I am interested in senior SRE, infrastructure automation, Windows/Linux platform,
and reliability engineering roles that support remote work from Sweden.

- [Resume](./resume/)
- [GitHub](https://github.com/autom8edIT)
- [LinkedIn](https://www.linkedin.com/in/joel-larsson-562a3121)
- [joel.larsson@autom8ed.me](mailto:joel.larsson@autom8ed.me)
