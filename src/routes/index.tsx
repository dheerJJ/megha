import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Heart, Instagram, Menu, Phone, Quote, Scissors, Sparkles, Star, X } from "lucide-react";
import heroImage from "@/assets/mira-hero.jpg";
import bridalImage from "@/assets/bridal-special.jpg";
import galleryImage from "@/assets/salon-gallery.jpg";
import meghaPortrait from "@/assets/megha-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mira by Megha Panchal | Premium Beauty Salon" },
    { name: "description", content: "Discover a calm, refined beauty experience at Mira by Megha Panchal. Enquire about appointments and bridal consultations." },
    { property: "og:title", content: "Mira by Megha Panchal | Premium Beauty Salon" },
    { property: "og:description", content: "A calm, premium beauty experience by Megha Panchal." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const nav = ["Home", "Services", "Gallery", "About", "Reviews", "Contact"];
const services = [
  { icon: Sparkles, title: "Signature Beauty", text: "Thoughtfully tailored rituals designed around you." },
  { icon: Scissors, title: "Hair Artistry", text: "Polished, modern styling with a beautifully personal finish." },
  { icon: Heart, title: "Bridal Beauty", text: "An unhurried, elevated experience for your most memorable day." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [review, setReview] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const reviews = [
    "Megha makes every appointment feel personal, calm and beautifully considered.",
    "From the warm welcome to the final look, the experience feels truly special.",
    "The attention to detail is exceptional. I left feeling polished and confident.",
  ];

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hello Mira, I'd like to request an appointment.%0AName: ${form.get("name")}%0APhone: ${form.get("phone")}%0AService: ${form.get("service")}%0ADate: ${form.get("date")}%0AMessage: ${form.get("message")}`;
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/15 bg-primary/85 text-primary-foreground backdrop-blur-xl">
        <div className="mx-auto grid h-16 sm:h-20 lg:h-24 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:px-8">
          <a href="#home" className="min-w-0 leading-none" aria-label="Mira home">
            <span className="block truncate font-display text-2xl sm:text-3xl font-semibold">Mira</span>
            <span className="mt-0.5 sm:mt-1 block truncate text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gold-soft">by Megha Panchal</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase transition-colors hover:text-gold">{item}</a>
            ))}
            <a href="#contact" className="rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase text-accent-foreground transition-transform hover:-translate-y-0.5">Book now</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 sm:size-11 shrink-0 place-items-center rounded-full border border-primary-foreground/25 lg:hidden" aria-label="Toggle navigation">
            {menuOpen ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
        {menuOpen && (
          <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-primary-foreground/15 bg-primary/95 px-5 py-5 backdrop-blur-2xl lg:hidden">
            {nav.map((item) => (
              <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block border-b border-primary-foreground/10 py-3.5 font-display text-2xl transition-colors hover:text-gold">
                {item}
              </a>
            ))}
            <a onClick={() => setMenuOpen(false)} href="#contact" className="mt-4 flex w-full items-center justify-center rounded-sm bg-gold py-3.5 text-center text-xs font-semibold uppercase text-accent-foreground">
              Book now
            </a>
          </nav>
        )}
      </header>

      <section id="home" className="relative flex min-h-[580px] sm:min-h-[720px] lg:min-h-[min(900px,94vh)] items-end overflow-hidden pt-20 sm:pt-24 lg:pt-28 lg:items-center">
        <img src={heroImage} alt="Elegant salon setting at Mira" width={1600} height={1104} className="absolute inset-0 size-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20 sm:via-primary/65 sm:to-primary/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 text-primary-foreground sm:px-8 sm:pb-20 lg:pb-0">
          <div className="max-w-2xl animate-reveal">
            <p className="mb-4 sm:mb-5 flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gold-soft">
              <span className="h-px w-8 sm:w-10 bg-gold"/>Beauty, considered
            </p>
            <h1 className="text-balance text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] sm:leading-[0.92] break-words">
              Where Beauty<br/><em className="font-normal text-gold-soft">Meets Confidence</em>
            </h1>
            <p className="mt-5 sm:mt-7 max-w-lg text-sm sm:text-base font-light leading-relaxed text-primary-foreground/80">
              A calm, personal beauty experience by Megha Panchal—created to help you look radiant and feel entirely yourself.
            </p>
            <div className="mt-7 sm:mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-sm bg-gold px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-1">
                Book on WhatsApp <ArrowRight size={16}/>
              </a>
              <a href="#services" className="inline-flex h-12 sm:h-13 items-center justify-center rounded-sm border border-primary-foreground/45 px-6 text-sm transition-colors hover:bg-primary-foreground/10">
                View services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-4 sm:grid-cols-4 sm:divide-y-0 sm:px-8">
          {["Experienced Stylists", "Premium Products", "Hygienic Studio", "Happy Clients"].map((x, i) => (
            <div key={x} className="px-3 py-6 text-center text-[10px] sm:text-xs font-medium uppercase tracking-[0.14em] sm:py-8">
              <span className="mb-1 sm:mb-2 block font-display text-xl sm:text-2xl text-gold">0{i+1}</span>
              {x}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-20 sm:scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="The Mira Edit" title="Beauty, made personal" text="Every appointment begins with listening. Every detail is shaped around how you want to feel."/>
          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
            {services.map(({icon: Icon,title,text},i)=>(
              <article key={title} className="group border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:shadow-xl sm:p-8 lg:p-9">
                <div className="mb-8 sm:mb-12 flex items-start justify-between">
                  <Icon className="text-gold" strokeWidth={1.2} size={30}/>
                  <span className="font-display text-xl text-muted-foreground">0{i+1}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <p className="mt-6 sm:mt-7 border-t border-border pt-4 sm:pt-5 text-xs uppercase tracking-[0.18em] text-gold">Pricing on consultation</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[460px] sm:min-h-[580px] overflow-hidden px-4 py-16 text-primary-foreground sm:px-8 sm:py-24">
        <img src={bridalImage} alt="Bridal beauty by Mira" width={1600} height={704} loading="lazy" className="absolute inset-0 size-full object-cover object-[68%_center]"/>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20 sm:via-primary/65 sm:to-transparent"/>
        <div className="relative mx-auto flex min-h-[320px] sm:min-h-[390px] max-w-7xl items-center">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">The bridal ritual</p>
            <h2 className="mt-4 sm:mt-5 text-balance text-3xl sm:text-5xl lg:text-7xl leading-tight sm:leading-none">
              Your moment,<br/><em className="font-normal">beautifully yours.</em>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              A considered bridal experience, from the first conversation to the final touch.
            </p>
            <a href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-sm text-gold-soft hover:text-gold transition-colors">
              Book your bridal consultation <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-20 sm:scroll-mt-24 bg-ivory-deep px-4 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="A closer look" title="The art of Mira" text="A glimpse into the details, textures and finishing touches behind every visit."/>
          <button onClick={()=>setLightbox(true)} className="group mt-10 sm:mt-14 block w-full overflow-hidden" aria-label="Open gallery">
            <img src={galleryImage} alt="Mira beauty services gallery" width={1408} height={1408} loading="lazy" className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"/>
          </button>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 sm:scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <img src={meghaPortrait} alt="Megha Panchal, founder of Mira" width={912} height={1200} loading="lazy" className="aspect-[3/4] w-full object-cover"/>
            <div className="absolute -bottom-4 right-2 sm:right-6 sm:-bottom-5 border border-gold bg-background px-4 py-3 sm:px-5 sm:py-4 font-display text-xl sm:text-2xl shadow-lg">
              Beauty with intention.
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Meet the founder" title="Megha Panchal" text="Mira is Megha’s expression of beauty as confidence: personal, unhurried and never one-size-fits-all."/>
            <p className="mt-5 sm:mt-6 text-sm leading-relaxed sm:leading-8 text-muted-foreground">
              Her approach pairs considered artistry with genuine warmth, creating a space where every client feels understood and every look feels authentically their own.
            </p>
            <div className="mt-8 sm:mt-10 grid grid-cols-2 border-y border-border py-6 sm:py-7">
              <div>
                <strong className="block font-display text-3xl sm:text-4xl font-medium">Personal</strong>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-muted-foreground">Consultation</span>
              </div>
              <div className="border-l border-border pl-5 sm:pl-6">
                <strong className="block font-display text-3xl sm:text-4xl font-medium">Refined</strong>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-muted-foreground">Artistry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-20 sm:scroll-mt-24 bg-primary px-4 py-16 text-primary-foreground sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto text-gold" size={36} strokeWidth={1}/>
          <div className="mt-6 sm:mt-7 flex justify-center gap-1 text-gold">
            {Array.from({length:5}).map((_,i)=><Star key={i} size={15} fill="currentColor"/>)}
          </div>
          <blockquote className="mt-6 sm:mt-7 text-balance font-display text-2xl sm:text-4xl lg:text-5xl leading-snug sm:leading-tight">
            “{reviews[review]}”
          </blockquote>
          <p className="mt-5 sm:mt-6 text-xs uppercase tracking-[0.22em] text-gold-soft">Guest note</p>
          <div className="mt-8 sm:mt-10 flex justify-center gap-3">
            <button onClick={()=>setReview((review+reviews.length-1)%reviews.length)} aria-label="Previous review" className="grid size-11 place-items-center rounded-full border border-primary-foreground/25 hover:border-gold hover:text-gold transition-colors">
              <ChevronLeft size={18}/>
            </button>
            <button onClick={()=>setReview((review+1)%reviews.length)} aria-label="Next review" className="grid size-11 place-items-center rounded-full border border-primary-foreground/25 hover:border-gold hover:text-gold transition-colors">
              <ChevronRight size={18}/>
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-7 border border-gold bg-blush/35 p-6 sm:p-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">A first Mira moment</p>
            <h2 className="mt-2 sm:mt-3 text-3xl sm:text-4xl sm:text-5xl">Your first visit, made special.</h2>
            <p className="mt-2 sm:mt-3 text-sm text-muted-foreground">Ask Megha about the current welcome experience when you book.</p>
          </div>
          <a href="#contact" className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5">
            Enquire now <ArrowRight size={16}/>
          </a>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 sm:scroll-mt-24 bg-ivory-deep px-4 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Reservations" title="Let’s plan your visit" text="Share a few details and continue your appointment request on WhatsApp."/>
          <div className="mt-10 sm:mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-primary p-6 text-primary-foreground sm:p-8 lg:p-10">
              <h3 className="text-3xl sm:text-4xl">Mira</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-soft">by Megha Panchal</p>
              <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-7 text-sm">
                <Info label="Address" value="To be confirmed"/>
                <Info label="Phone / WhatsApp" value="To be confirmed"/>
                <Info label="Opening hours" value="To be confirmed"/>
              </div>
              <div className="mt-8 sm:mt-10 flex gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-primary-foreground/25"><Instagram size={17}/></span>
                <span className="grid size-10 place-items-center rounded-full border border-primary-foreground/25"><Phone size={17}/></span>
              </div>
            </div>
            <form onSubmit={submitBooking} className="grid gap-4 sm:gap-5 bg-card p-5 sm:p-8 lg:p-10 shadow-sm sm:grid-cols-2">
              <Field label="Your name"><input required name="name" className="field" placeholder="Name"/></Field>
              <Field label="Phone number"><input required name="phone" inputMode="tel" className="field" placeholder="Phone"/></Field>
              <Field label="Service">
                <select name="service" className="field">
                  <option>Signature Beauty</option>
                  <option>Hair Artistry</option>
                  <option>Bridal Beauty</option>
                </select>
              </Field>
              <Field label="Preferred date"><input name="date" type="date" className="field"/></Field>
              <div className="sm:col-span-2">
                <Field label="Anything we should know?"><textarea name="message" className="field min-h-24 sm:min-h-28 resize-y" placeholder="Tell us about your visit"/></Field>
              </div>
              <button type="submit" className="inline-flex h-12 sm:h-13 w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground sm:col-span-2 transition-transform hover:-translate-y-0.5">
                Continue on WhatsApp <ArrowRight size={16}/>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary px-4 pb-24 pt-12 text-primary-foreground sm:px-8 sm:pb-14 sm:pt-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-7 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-display text-3xl sm:text-4xl">Mira</span>
            <p className="mt-1 sm:mt-2 text-[10px] uppercase tracking-[0.24em] text-gold-soft">by Megha Panchal</p>
          </div>
          <p className="text-xs text-primary-foreground/55">© 2026 Mira by Megha Panchal</p>
        </div>
      </footer>

      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex gap-2 sm:bottom-6 sm:right-6">
        <a href="#contact" aria-label="Book on WhatsApp" className="grid size-12 place-items-center rounded-full bg-gold text-accent-foreground shadow-xl transition-transform hover:scale-105 active:scale-95">
          <CalendarDays size={19}/>
        </a>
      </div>

      {lightbox && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 p-3 sm:p-6" onClick={()=>setLightbox(false)}>
          <button className="absolute right-4 top-4 sm:right-6 sm:top-6 grid size-11 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors" aria-label="Close gallery">
            <X size={20}/>
          </button>
          <img src={galleryImage} alt="Mira beauty gallery enlarged" className="max-h-[85vh] max-w-[92vw] object-contain rounded-sm shadow-2xl"/>
        </div>
      )}
    </main>
  );
}

function SectionTitle({eyebrow,title,text}:{eyebrow:string,title:string,text:string}) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-gold">
        <span className="h-px w-8 sm:w-9 bg-gold"/>{eyebrow}
      </p>
      <h2 className="mt-4 sm:mt-5 text-balance text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] sm:leading-none">{title}</h2>
      <p className="mt-3 sm:mt-5 max-w-xl text-sm leading-relaxed sm:leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}

function Info({label,value}:{label:string,value:string}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-gold-soft">{label}</p>
      <p className="mt-2 text-primary-foreground/80">{value}</p>
    </div>
  );
}

function Field({label,children}:{label:string,children:React.ReactNode}) {
  return (
    <label className="block text-[11px] font-medium uppercase tracking-[0.13em] text-muted-foreground">
      {label}
      {children}
    </label>
  );
}
