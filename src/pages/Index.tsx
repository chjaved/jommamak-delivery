import { FormEvent, useEffect, useState } from "react";
import {
  ArrowUp,
  Bike,
  Building2,
  CheckCircle2,
  ChefHat,
  Facebook,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Utensils,
  UserRound,
  Youtube,
  Zap,
} from "lucide-react";
import logo from "@/assets/jommamak-logo.png";

type Audience = "customer" | "owner" | "rider" | "";

const FaqRow = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`jm-faq-row ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="jm-faq-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="jm-faq-plus" aria-hidden="true">
          <Plus size={18} strokeWidth={2.5} />
        </span>
      </button>
      <div className="jm-faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const [audience, setAudience] = useState<Audience>("");
  const [sent, setSent] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const appShowcase = [
    {
      c: "jm-app-user",
      icon: UserRound,
      eb: "For Customers",
      h: "Customer App",
      p: "Order, track, and reorder your usual without hunting through menus.",
      screenshot: "/app-screenshot-customer2.png",
      screenshotAlt: "JomMamak customer app screenshot",
      playUrl: "https://play.google.com/store/apps/details?id=com.jommamakclient.jommamak&hl=en_US",
    },
    {
      c: "jm-app-vendor",
      icon: Store,
      eb: "For Restaurant Owners",
      h: "Vendor App",
      p: "Manage menus, order flow, opening hours, and promos from one place.",
      screenshot: "/app-screenshot-vendor.png",
      screenshotAlt: "JomMamak Services vendor app screenshot",
      playUrl: "https://play.google.com/store/apps/details?id=com.jommamakservices&hl=en",
    },
    {
      c: "jm-app-rider",
      icon: Bike,
      eb: "For Riders",
      h: "Rider App",
      p: "Accept nearby jobs, follow smart routes, and keep customers updated.",
      screenshot: "/app-screenshot-rider.png",
      screenshotAlt: "JomMamak Delivery rider app screenshot",
      playUrl: "https://play.google.com/store/apps/details?id=com.jommamakdelivery.jommamakdelivery",
    },
  ];
  const trustStats = [
    { value: "4.8", label: "Play Store rating" },
    { value: "200+", label: "Verified stalls" },
    { value: "25 min", label: "Typical delivery" },
    { value: "Till 3am", label: "Late-night favourites" },
  ];
  const audiencePaths = [
    {
      icon: UserRound,
      eyebrow: "For Customers",
      title: "Download the app",
      body: "Browse nearby mamak stalls, track your rider live, and reorder your usual in seconds.",
      cta: "Get customer app",
      href: "https://play.google.com/store/apps/details?id=com.jommamakclient.jommamak&hl=en_US",
    },
    {
      icon: Store,
      eyebrow: "For Restaurant Owners",
      title: "List your stall",
      body: "Turn walk-in demand into delivery orders with menu control, promo tools, and clearer order flow.",
      cta: "Open vendor app",
      href: "https://play.google.com/store/apps/details?id=com.jommamakservices&hl=en",
    },
    {
      icon: Bike,
      eyebrow: "For Riders",
      title: "Start delivering",
      body: "Accept nearby jobs, follow simple routes, and keep customers updated from pickup to doorstep.",
      cta: "Open rider app",
      href: "https://play.google.com/store/apps/details?id=com.jommamakdelivery.jommamakdelivery",
    },
  ];

  useEffect(() => {
    const revealItems = document.querySelectorAll(".jm-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((slide) => (slide + 1) % 2);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="jm">
      <nav className="jm-nav">
        <a href="#home" aria-label="JomMamak home" className="jm-logo-badge">
          <img src={logo} alt="JomMamak" className="jm-logo-img-nav" />
        </a>
        <ul className="jm-nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#apps">Apps</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#download">Downloads</a></li>
        </ul>
        <a href="#download" className="jm-nav-pill">Download App</a>
      </nav>

      <section className="jm-hero" id="home">
        <div className="jm-hero-slider">
          <div className={`jm-hero-slide ${activeHeroSlide === 0 ? "is-active" : ""}`} aria-hidden={activeHeroSlide !== 0}>
            <div className="jm-hero-grid">
              <div className="jm-hero-left jm-reveal is-visible">
                <div className="jm-hero-chip">Now Available in Malaysia</div>
                <h1 className="jm-hero-h1">
                  Order from nearby<br />
                  <span className="accent">mamak stalls in minutes.</span>
                </h1>
                <p className="jm-hero-sub">
                  JomMamak helps customers order faster, vendors manage real demand, and riders deliver with live tracking from kitchen to doorstep.
                </p>
                <div className="jm-hero-proof">
                  <span><Star size={15} fill="currentColor" /> 4.8 rating on Google Play</span>
                  <span><CheckCircle2 size={15} /> 200+ verified stalls</span>
                  <span><Zap size={15} /> Under 25 minutes in selected areas</span>
                </div>
                <div className="jm-hero-btns">
                  <a href="#download" className="jm-btn-y"><Sparkles size={18} /> Download Free</a>
                  <a href="#paths" className="jm-btn-link">Choose your path</a>
                </div>
              </div>

              <div className="jm-hero-stage jm-reveal is-visible">
                <div className="jm-route-card jm-route-top">
                  <MapPin size={18} />
                  <span>Stall found 1.4km away</span>
                </div>
                <div className="jm-route-card jm-route-bottom">
                  <Bike size={18} />
                  <span>Rider arriving in 8 min</span>
                </div>

                <div className="jm-phone">
                  <img src="/app-screenshot.png" alt="JomMamak customer app screenshot" className="jm-phone-img" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <div className={`jm-hero-slide ${activeHeroSlide === 1 ? "is-active" : ""}`} aria-hidden={activeHeroSlide !== 1}>
            <div className="jm-hero-grid">
              <div className="jm-hero-left jm-reveal is-visible">
                <div className="jm-hero-chip">Halal Food, Made Easy</div>
                <h1 className="jm-hero-h1">
                  JomMamak, built just<br />
                  <span className="accent">for halal mamak food.</span>
                </h1>
                <p className="jm-hero-sub">
                  From roti canai breakfasts to nasi kandar dinners and late-night teh tarik, JomMamak connects Malaysians with halal-friendly mamak stalls nearby.
                </p>
                <div className="jm-hero-proof">
                  <span><ShieldCheck size={15} /> Halal-focused mamak choices</span>
                  <span><Utensils size={15} /> Roti, rice, drinks, and supper</span>
                  <span><HeartHandshake size={15} /> Built for Malaysian regulars</span>
                </div>
                <div className="jm-hero-btns">
                  <a href="#download" className="jm-btn-y"><Sparkles size={18} /> Find Mamak Nearby</a>
                  <a href="#menu" className="jm-btn-link">View favourites</a>
                </div>
              </div>

              <div className="jm-hero-stage jm-hero-halal-stage jm-reveal is-visible">
                <div className="jm-halal-card jm-halal-top">
                  <ShieldCheck size={18} />
                  <span>Halal-focused mamak stalls</span>
                </div>
                <div className="jm-halal-card jm-halal-bottom">
                  <ChefHat size={18} />
                  <span>Hot food from local kitchens</span>
                </div>

                <div className="jm-halal-showcase">
                  <div className="jm-halal-sign">
                    <Store size={22} aria-hidden="true" />
                    <span>Nearby mamak stalls</span>
                  </div>
                  <div className="jm-food-spread">
                    <article className="jm-food-tile jm-food-main">
                      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Nasi_kandar.jpg?width=900" alt="Nasi kandar from a mamak stall" loading="lazy" />
                      <span>Nasi Kandar</span>
                    </article>
                    <article className="jm-food-tile">
                      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Roti_Canai_%288653051869%29.jpg?width=700" alt="Roti canai" loading="lazy" />
                      <span>Roti Canai</span>
                    </article>
                    <article className="jm-food-tile">
                      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Teh_Tarik.jpg?width=700" alt="Teh tarik" loading="lazy" />
                      <span>Teh Tarik</span>
                    </article>
                  </div>
                  <div className="jm-halal-plate">
                    <Utensils size={26} aria-hidden="true" />
                    <strong>Mamak classics</strong>
                    <span>halal-friendly and close by</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="jm-hero-dots" aria-label="Hero slides">
            {[0, 1].map((slide) => (
              <button
                key={slide}
                type="button"
                className={activeHeroSlide === slide ? "is-active" : ""}
                aria-label={`Show slide ${slide + 1}`}
                aria-current={activeHeroSlide === slide}
                onClick={() => setActiveHeroSlide(slide)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="jm-trust-strip jm-reveal" aria-label="Early trust signals">
        <div className="jm-container jm-trust-strip-inner">
          <div className="jm-trust-intro">
            <span>Trusted by local stalls and late-night regulars</span>
          </div>
          <div className="jm-trust-stats">
            {trustStats.map((item) => (
              <div className="jm-trust-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="jm-ticker" aria-label="Popular food ticker">
        <div className="jm-ticker-inner">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Nasi Kandar", "Teh Tarik", "Roti Canai", "Roti Tisu", "Three Layer Tea", "Milo Dinosaur", "Lamb Shank", "Maggi Goreng", "Tosai", "Capati"].map((word, j) => (
              <span key={`${i}-${j}`}>{word}</span>
            ))
          )}
        </div>
      </div>

      <section className="jm-sec jm-menu jm-reveal" id="menu">
        <div className="jm-container">
          <div className="jm-menu-head">
            <div>
              <div className="jm-eyebrow">Menu Preview</div>
              <h2 className="jm-bigh">The usual favourites, looking irresistible.</h2>
            </div>
            <p className="jm-body">A quick taste of what users can browse inside the app, from breakfast roti to late-night lamb shank.</p>
          </div>
          <div className="jm-menu-grid">
            {[
              { n: "Nasi Kandar", p: "RM 8.50", tag: "Best Seller", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi_kandar.jpg?width=900" },
              { n: "Teh Tarik", p: "RM 2.50", tag: "Classic", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Teh_Tarik.jpg?width=900" },
              { n: "Roti Tisu", p: "RM 4.90", tag: "Sweet", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Roti_Tisu.jpg?width=900" },
              { n: "Roti Canai", p: "RM 1.80", tag: "Crispy", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Roti_Canai_%288653051869%29.jpg?width=900" },
              { n: "Three Layer Tea", p: "RM 3.80", tag: "Iced", img: "https://commons.wikimedia.org/wiki/Special:FilePath/3_Layer_Milk_Tea.jpg?width=900" },
              { n: "Milo Dinosaur", p: "RM 4.20", tag: "Power Drink", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Milo_dinosaur_-_a_cup_of_Milo_with_undissolved_Milo_powder_added_on_top.jpg?width=900" },
              { n: "Lamb Shank", p: "RM 28.90", tag: "Premium", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamb_shank_with_curry.jpg?width=900" },
            ].map((dish, index) => (
              <article className={`jm-menu-card ${index === 0 ? "jm-menu-card-featured" : ""}`} key={dish.n}>
                <img src={dish.img} alt={dish.n} loading="lazy" />
                <div className="jm-menu-card-info">
                  <span>{dish.tag}</span>
                  <h3>{dish.n}</h3>
                  <p>{dish.p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="jm-stats jm-reveal">
        <div className="jm-stats-row">
          <div className="jm-stat"><div className="jm-stat-n">200+</div><div className="jm-stat-l">Mamak Stalls</div></div>
          <div className="jm-stat"><div className="jm-stat-n">50K+</div><div className="jm-stat-l">Happy Customers</div></div>
          <div className="jm-stat"><div className="jm-stat-n">25m</div><div className="jm-stat-l">Avg. Delivery</div></div>
          <div className="jm-stat"><div className="jm-stat-n">4.8</div><div className="jm-stat-l">App Rating</div></div>
        </div>
      </div>

      <section className="jm-sec jm-paths jm-reveal" id="paths">
        <div className="jm-container">
          <div className="jm-section-head">
            <div className="jm-eyebrow">Choose Your Path</div>
            <h2 className="jm-bigh">One platform, three clear next steps.</h2>
          </div>
          <div className="jm-path-grid">
            {audiencePaths.map((path) => (
              <article className="jm-path-card" key={path.title}>
                <path.icon className="jm-path-icon" aria-hidden="true" />
                <div className="jm-app-eyebrow">{path.eyebrow}</div>
                <h3>{path.title}</h3>
                <p>{path.body}</p>
                <a href={path.href} target="_blank" rel="noreferrer" className="jm-path-link">
                  {path.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-sec jm-hiw jm-reveal" id="how">
        <div className="jm-container">
          <div className="jm-section-head jm-section-head-dark">
            <div className="jm-eyebrow">Simple & Fast</div>
            <h2 className="jm-bigh">Ordering Mamak in 3 Easy Steps</h2>
          </div>
          <div className="jm-steps-grid">
            {[
              { icon: Search, t: "Browse Stalls", d: "Find your favourite mamak stall nearby or discover new ones with great reviews." },
              { icon: ShoppingCart, t: "Pick Your Food", d: "Choose from the full menu - roti, nasi, drinks and more - and add to cart." },
              { icon: Bike, t: "Enjoy at Home", d: "Your rider delivers piping hot mamak straight to your door. Sedap guaranteed!" },
            ].map((step) => (
              <div className="jm-step-card" key={step.t}>
                <span className="jm-step-emoji-big"><step.icon size={32} aria-hidden="true" /></span>
                <div className="jm-step-name">{step.t}</div>
                <p className="jm-step-desc2">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-sec jm-apps jm-reveal" id="apps">
        <div className="jm-container">
          <div className="jm-apps-layout">
            <div className="jm-apps-copy">
              <div className="jm-eyebrow">Three Apps, One Platform</div>
              <h2 className="jm-bigh">Built for every side of the mamak run.</h2>
              <p className="jm-body">Customers order faster, stall owners manage demand, and riders get clear jobs with live updates.</p>
            </div>
            <div className="jm-apps-grid">
              {appShowcase.map((app) => (
                <div className={`jm-app-card ${app.c}`} key={app.h}>
                  <div className="jm-app-card-top">
                    <div>
                      <app.icon className="jm-app-emoji" aria-hidden="true" />
                      <div className="jm-app-eyebrow">{app.eb}</div>
                      <div className="jm-app-h3">{app.h}</div>
                      <p className="jm-app-p">{app.p}</p>
                    </div>
                    <img
                      src={app.screenshot}
                      alt={app.screenshotAlt}
                      className="jm-app-shot"
                      loading="lazy"
                    />
                  </div>
                  <div className="jm-app-actions">
                    <a href={app.playUrl} target="_blank" rel="noreferrer" className="jm-store-badge">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get it on Google Play"
                        height="40"
                      />
                    </a>
                    <span className="jm-store-badge jm-store-badge-muted">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                        alt="Download on the App Store"
                        height="40"
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="jm-sec jm-features jm-reveal">
        <div className="jm-container">
          <div className="jm-section-head jm-section-head-dark">
            <div className="jm-eyebrow">Built For Malaysia</div>
            <h2 className="jm-bigh">Everything you need,<br />nothing you don't.</h2>
          </div>
          <div className="jm-features-grid">
            {[
              { icon: Building2, h: "Hundreds of Stalls", p: "Browse 200+ verified mamak stalls near you - sorted by distance, rating, and cuisine type." },
              { icon: Zap, h: "Lightning Fast", p: "Real-time order tracking from kitchen to door. Average delivery under 25 minutes." },
              { icon: MapPin, h: "Hyperlocal", p: "We focus on your neighbourhood, not just city centres - your nearest mamak is on us." },
              { icon: Bike, h: "Reliable Riders", p: "Dedicated rider network trained to handle food with care. Hot food stays hot." },
            ].map((feature) => (
              <div className="jm-feature-card" key={feature.h}>
                <feature.icon className="jm-feature-icon" aria-hidden="true" strokeWidth={2.8} />
                <h3>{feature.h}</h3>
                <p>{feature.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-sec jm-testimonials jm-reveal" id="reviews">
        <div className="jm-container">
          <div className="jm-testimonial-head">
            <div>
              <div className="jm-eyebrow">App Feedback</div>
              <h2 className="jm-bigh">People are already ordering like regulars.</h2>
            </div>
            <div className="jm-review-score">
              <Star size={22} fill="currentColor" />
              <span>4.8</span>
              <small>average app rating</small>
            </div>
          </div>
          <div className="jm-testimonial-grid">
            {[
              { name: "Aina", role: "Customer in Shah Alam", quote: "The reorder button is perfect. My teh tarik and roti telur arrive before my meeting starts." },
              { name: "Jason", role: "Customer in PJ", quote: "I found a mamak two streets away that I never noticed before. Delivery tracking is surprisingly accurate." },
              { name: "Farid", role: "Restaurant owner", quote: "Orders are clearer than phone calls. My staff can see items, notes, and pickup timing without shouting across the shop." },
            ].map((review) => (
              <article className="jm-testimonial-card" key={review.name}>
                <div className="jm-stars" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star size={15} fill="currentColor" key={index} />
                  ))}
                </div>
                <MessageCircle className="jm-quote-icon" aria-hidden="true" />
                <p>"{review.quote}"</p>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-sec jm-contact jm-reveal" id="contact">
        <div className="jm-container jm-contact-grid">
          <div className="jm-contact-copy">
            <div className="jm-eyebrow">Connect With Us</div>
            <h2 className="jm-bigh">Tell us who you are, then tell us what to fix.</h2>
            <p className="jm-body">Whether you're a customer, restaurant owner, or rider — send your feedback straight to the JomMamak team.</p>
            <div className="jm-socials" aria-label="Social media links">
              <a href="#" aria-label="JomMamak on Instagram"><Instagram size={20} /><span>Instagram</span></a>
              <a href="#" aria-label="JomMamak on Facebook"><Facebook size={20} /><span>Facebook</span></a>
              <a href="#" aria-label="JomMamak on YouTube"><Youtube size={20} /><span>YouTube</span></a>
            </div>
            <div className="jm-contact-details" aria-label="Contact details">
              <div className="jm-contact-detail">
                <MapPin size={20} />
                <span>
                  C-3A-13, Centum @ Oasis Corporate Park<br />
                  No. 2, Jalan PJU 1A/2, Ara Damansara<br />
                  47301 Petaling Jaya, Selangor, Malaysia
                </span>
              </div>
              <a className="jm-contact-detail" href="tel:+60380805249">
                <Phone size={20} />
                <span>+03-8080 5249</span>
              </a>
              <a className="jm-contact-detail" href="mailto:for_services@iprofixer.com.my">
                <Mail size={20} />
                <span>for_services@iprofixer.com.my</span>
              </a>
            </div>
            <div className="jm-contact-promise">We reply within 1 business day for vendor and partnership enquiries.</div>
          </div>

          <form className="jm-contact-form" onSubmit={handleSubmit}>
            <label>
              I am a
              <select name="role" value={audience} onChange={(e) => setAudience(e.target.value as Audience)} required>
                <option value="">Select your role</option>
                <option value="customer">Customer</option>
                <option value="owner">Restaurant Owner</option>
                <option value="rider">Rider</option>
              </select>
            </label>
            <label>
              Name
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="hello@example.com" required />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" placeholder="+60 12-345 6789" />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us what's on your mind..." rows={4} required />
            </label>
            <button className="jm-send-btn" type="submit">
              <Send size={18} /> Send Message
            </button>
            {sent && (
              <div className="jm-form-success">
                <CheckCircle2 size={18} /> Thanks! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="jm-sec jm-faq jm-reveal">
        <div className="jm-container">
          <div className="jm-section-head">
            <div className="jm-eyebrow">More Questions?</div>
            <h2 className="jm-bigh">Everything you wanted to<br />know.</h2>
          </div>
          <div className="jm-faq-list">
            {[
              {
                q: "Is JomMamak available in my area?",
                a: "JomMamak is currently available in selected areas across Klang Valley, including Kuala Lumpur, Petaling Jaya, Shah Alam, and Puchong. We're expanding fast — check the app to see stalls near you.",
              },
              {
                q: "How do I become a mamak vendor on the platform?",
                a: "Download the JomMamak Vendor App from Google Play, register your stall details, and our team will verify and onboard you within 1–3 business days. No contracts, no setup fees.",
              },
              {
                q: "What payment methods are accepted?",
                a: "We accept major e-wallets (Touch 'n Go, GrabPay, Boost), online banking (FPX), and credit/debit cards. Cash on delivery is available in selected areas.",
              },
              {
                q: "Is the app really free to download?",
                a: "Yes, completely free. No subscription, no hidden charges. You only pay for what you order, plus a small delivery fee based on distance.",
              },
              {
                q: "Can I order at 3am?",
                a: "Absolutely — that's kind of our thing. Many mamak stalls on JomMamak operate late into the night. Just check the app for stalls marked as open near you.",
              },
              {
                q: "How long does delivery usually take?",
                a: "Average delivery time is under 25 minutes for orders within 3km. You can track your rider live from the moment they pick up your order.",
              },
              {
                q: "How do I become a rider?",
                a: "Download the JomMamak Rider App, sign up with your details and vehicle info, and complete a quick onboarding. You can start accepting jobs as soon as you're verified.",
              },
              {
                q: "What if my order is wrong or missing items?",
                a: "Contact us through the app's Help section within 30 minutes of delivery. Our support team will review and resolve it — refund or replacement depending on the situation.",
              },
            ].map(({ q, a }) => (
              <FaqRow key={q} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="jm-cta jm-reveal" id="download">
        <h2 className="jm-cta-h2">Ready when you are.<br /><span>Get JomMamak now.</span></h2>
        <p className="jm-cta-sub">Free download. No subscription. Just authentic mamak, delivered hot to your door.</p>
        <div className="jm-cta-btns">
          <a href="https://apps.apple.com" className="jm-store-badge" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              height="52"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.jommamakclient.jommamak&hl=en_US" className="jm-store-badge" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              height="52"
            />
          </a>
        </div>
      </section>

      <footer className="jm-footer">
        <div className="jm-footer-top">
          <div>
            <div className="jm-logo-badge jm-logo-badge-footer">
              <img src={logo} alt="JomMamak" className="jm-logo-img-lg" />
            </div>
            <p className="jm-footer-tag">Malaysia's favourite mamak food, delivered hot and fresh, anytime.</p>
          </div>
          <div className="jm-fcol">
            <h4>Company</h4>
            <ul><li><a href="#">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li></ul>
          </div>
          <div className="jm-fcol">
            <h4>Support</h4>
            <ul><li><a href="#contact">Contact</a></li><li><a href="#apps">Partners</a></li><li><a href="#contact">Vendor Login</a></li></ul>
          </div>
          <div className="jm-fcol">
            <h4>Social</h4>
            <ul><li><a href="#">Instagram</a></li><li><a href="#">Facebook</a></li><li><a href="#">YouTube</a></li></ul>
          </div>
        </div>
        <div className="jm-footer-bot">
          <span>Copyright 2026 JomMamak Sdn Bhd. All rights reserved.</span>
          <span>Kuala Lumpur, Malaysia</span>
        </div>
      </footer>

      <button
        className={`jm-back-top ${showBackToTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={22} aria-hidden="true" />
      </button>
    </div>
  );
};

export default Index;
