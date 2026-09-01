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

---

## What I deliver

### Root-cause analysis across layers

I work from evidence rather than repair checklists: client symptoms, DNS and
routing, identity, services, operating-system state, logs, hardware, and the
application path. The goal is not merely to restore service, but to identify the
failed layer and prove that the repair worked.

### Infrastructure automation

I turn repeated operational work into bounded, observable automation using
PowerShell, Python, C/C++, Go, and Rust. I favor explicit inputs, dry-run or
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

---

## Featured project: GodBrain

[GodBrain](https://github.com/usrname1git/GodBrain) is a Windows-first SRE agent
and automation system with a native C++ control kernel, a Go knowledge boundary,
and a local OpenAI-compatible model endpoint.

### Engineering problem

Traditional support tools inspect isolated components. Generic AI assistants can
produce plausible advice but usually lack trustworthy host evidence, durable
operational memory, controlled execution, and a verifier.

### Design

```text
host evidence
    -> bounded diagnosis
    -> retrieved and reviewed operational knowledge
    -> proposed action
    -> authorization and policy gate
    -> exact-child execution
    -> post-change verification
    -> auditable result
```

### Current capabilities

- Loopback-only C++ HTTP kernel and operator interface.
- Windows host inventory, service and process observations, network diagnostics,
  and bounded local tooling.
- Bearer-authenticated privileged commands with explicit policy decisions.
- Immutable source ingestion and candidate-to-verified knowledge promotion.
- Fail-closed retrieval and local-edit verification with rollback.
- Append-only audit and correlated event history.

The project is deliberately conservative around privileged execution: automated
diagnosis is broader than automated repair, and high-impact changes remain
operator-gated.

[Explore the active implementation](https://github.com/usrname1git/GodBrain)

---

## Architecture case study: OmniContext

[OmniContext](https://github.com/autom8edIT/OmniContext) preserves the earlier
prototype and explains the engineering lessons that led to GodBrain's current
design.

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
