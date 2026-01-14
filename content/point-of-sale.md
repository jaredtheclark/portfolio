# JCPenney Next Generation POS

**Point of Sale Modernization · Senior UX Designer · 2022**

Led UI design and design system creation for a national retailer's complete POS overhaul—from 20-year-old registers to mobile-first checkout across 650+ stores.

---

| $6.2M | 86 | 31+ | 4 mo |
|-------|-----|-----|------|
| Hardware savings | Jobs discovered | Stores launched | Research to handoff |

---

## The Situation

JCPenney's point of sale hadn't been touched since 2004. Associates were tethered to fixed registers, unable to help customers on the floor. Online and in-store systems didn't talk to each other. The credit application process took so long customers would abandon purchases mid-transaction.

The company needed more than a facelift—they needed a complete platform transformation: new network infrastructure, new hardware, new software, and a mobile-first approach that would let associates meet customers anywhere in the store.

I joined a cross-functional team spanning three workstreams: a mobile pilot program, a "checkout of the future" design effort, and a lab proof-of-concept comparing hardware vendors. My focus was Workstream 2: designing the future checkout experience for both associates and customers.

---

## My Role

**Senior UX Designer** responsible for:

- UI design strategy and design system creation
- Co-facilitating JTBD and ORCA workshops with cross-functional stakeholders
- Contextual inquiry and persona validation at JCP stores
- Translating 86 jobs-to-be-done into journey maps and interactive prototypes
- Building Figma components that mapped directly to GK platform capabilities

I worked alongside a Principal UX Architect who led the research strategy, partnering with a technical team of architects and developers, and reporting to stakeholders including the Director of Store Ops, VP of Store Ops, and the CIO.

---

## Discovery: Understanding 86 Ways to Do a Job

The retailer's checkout process wasn't one job—it was dozens. Cash management alone had 23 distinct tasks. Returns, exchanges, tax compliance, specialty departments like Fine Jewelry and Salon—each had their own workflows, edge cases, and frustrations.

### Contextual Inquiry

We spent time in stores with associates at their registers. I set up a camera on a tripod to capture actual screen states during transactions—not staged demos, but real workflows with real friction. We interviewed cashiers, supervisors, and specialty associates to understand not just what they did, but why existing workarounds existed.

One cashier showed us how she'd developed her own system for handling BOGO promotions because the POS couldn't calculate multi-item discounts. A Fine Jewelry supervisor explained why she kept customer information in a separate notebook instead of the system. These weren't user errors—they were signals that the current system had failed them.

### Jobs-to-Be-Done Workshops

We facilitated workshops with 27 cross-functional partners from Accounting, Tax, Customer Care, Store Ops, and a dozen other departments. The goal was to surface every job an associate might need to complete through the POS, then cluster them into themes and define success metrics for each.

The workshops produced 86 distinct jobs-to-be-done across 13 categories: Core Checkout, Cash Management, Returns, Tax Compliance, Administration, Training, and more. For each job, we captured the situation, motivation, and expected outcome—creating a research foundation that would drive every design decision.

### Four Personas, Validated

The client came to us with two proto-personas: "Sally Sixteen" (a young part-timer) and "Edna Eighty" (a veteran associate). Through interviews and surveys, we expanded and validated these into four research-backed personas:

- **Nelly Newbie**: College student, part-time cashier, anxious about system crashes during transactions
- **Victor Veteran**: 5+ year associate who'd developed workarounds for every system gap
- **Steadfast Samuel**: Supervisor focused on coaching and metrics, frustrated by system unreliability
- **Specialist Suzanna**: Fine Jewelry lead juggling sales, repairs, and customer relationships across disconnected tools

Each persona captured not just demographics and tasks, but emotional and social needs—what it felt like to have the system crash during a credit application, or to appear slow in front of waiting customers.

---

## Design System: Built Solo, Designed to Scale

JCPenney had marketing components for their e-commerce site but no true design system. The GK platform we were building on used SAP's design language, but the client wanted something they could own and extend across future products.

With a flexible timeline, I took on building a complete design system from the ground up.

### The Approach

I started with design tokens as Figma variables—colors, typography, spacing—then worked upward through primitives to application-level components. Every component was built with auto-layout for responsive behavior across the mobile M60 device and docked desktop display.

Rather than maintain separate files, I built a monolithic Figma workspace organized by component type: atoms, molecules, application components, page templates, and interactive prototypes. This let me iterate quickly while keeping the technical team's source of truth in one place.

### The Components

The system included everything needed for a complete POS experience:

- Transaction line items with configurable states (regular, sale, clearance, return)
- Payment method selectors supporting cash, card, check, and gift card
- Customer lookup and rewards integration
- Till management interfaces for cash counting and reconciliation
- Specialty workflows for Fine Jewelry, Salon appointments, and BOPIS fulfillment

Each component mapped to real data objects surfaced in our ORCA workshops, ensuring the UI accurately represented what the backend systems could actually support.

### The Reception

When I presented the design system to JCPenney's internal UX team, their lead designer jokingly interrogated me about whether I had a hidden team of designers helping. He appreciated how the system integrated their existing brand while being flexible enough for multiple product contexts—and that every component actually worked with auto-layout.

---

## Key Design Decisions

### Mobile-First, Dock-Aware

The ELO M60 device could be used handheld on the sales floor or docked at a fixed terminal with a larger touchscreen. Rather than designing two separate experiences, I created a responsive system where the same UI adapted to context.

On the floor, associates could scan items, look up inventory, and even complete transactions. At the dock, the M60 screen flipped to face customers for signature capture and payment input while associates used the larger display for complex operations like returns and exchanges.

### Journey Maps at Scale

We needed to document current and future state journeys for all 86 jobs-to-be-done—a massive documentation challenge. I built a Figma component system specifically for journey mapping, where each step was a configurable component that could expand to accommodate any workflow length using auto-layout.

This let the research team rapidly document journeys while maintaining visual consistency. Each map captured associate actions, customer touchpoints, emotional states, and proposed changes—becoming the specification that drove development priorities.

### Mapping UI to System Objects

Through our ORCA workshops, we'd mapped the relationships between business objects: Customer, Transaction, Tender, Item, Associate, and their attributes and connections. I used this object model to structure the UI, ensuring every component had a clear relationship to backend data.

This alignment meant developers could look at a Figma prototype and immediately understand what data needed to flow where. It reduced ambiguity in handoffs and caught integration issues early—before they became expensive rework.

---

## Outcomes

### For the Business

- **$6.2M saved** through hardware selection study and vendor negotiations
- **31+ stores modernized** with the new POS system following our design
- **Aggressive timeline met** across two 16-week engagements

### For Customers and Associates

- **Mobile checkout enabled** reducing wait times for customers who could complete purchases on the floor
- **Streamlined credit applications** allowing same-transaction approval and purchase
- **Unified omnichannel experience** connecting in-store and online systems

### For the Organization

- **Design system established** that JCPenney's UX team could extend to future products
- **Agile practices introduced** through sprint ceremonies and backlog management
- **Research foundation created** with documented personas, journey maps, and JTBD that informed subsequent phases

---

## Reflection

This project taught me the value of research infrastructure. The 86 jobs-to-be-done we documented weren't just artifacts—they became the language the entire cross-functional team used to discuss priorities, make tradeoffs, and measure success.

Building the design system solo under timeline pressure forced clarity about what components actually needed to do versus what would be nice to have. Every auto-layout decision, every variant, had to earn its place.

Most importantly, I learned how to co-lead workshops that respected stakeholders' time while extracting the information we needed. When you're in a room with 27 people from 14 departments, every minute matters. The preparation—the component templates, the facilitation plan, the follow-up documentation—made the difference between a productive session and an expensive meeting.