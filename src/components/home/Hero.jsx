import "./Hero.css";

const terminalText = `$ cold-brew-code init
  Initializing Cold Brew Code...
  [████████████████████] 100%
  ✓ Environment ready

$ grind --coarse --weight=150g
  Grinding to coarse setting...
  ✓ 150g ground and ready

$ brew --method=cold --filtered
  Adding grounds to chamber...
  Pouring cold filtered water...
  Sealing vessel...
  ✓ Brew started

$ steep --duration=24h
  [████████████████████] 24:00:00
  ✓ 500ml concentrate extracted

$ strain --filter=fine
  Running through filter...
  Removing all grounds...
  ✓ Clean concentrate ready

$ add --oat-milk --ratio=1:1
  Measuring oat milk: 250ml...
  ✓ Ratio locked

$ add --ice --cubes=4 --glass=tall
  Dropping ice into glass...
  ✓ Temperature: 34°F

$ serve
  ✓ Cold Brew Code is served.

$ menu --list
  COLD BREW CODE MENU
  ───────────────────
  cold_brew.standard     $4.50
  cold_brew.oat_milk     $5.00
  cold_brew.vanilla      $5.25
  cold_brew.lavender     $6.00
  espresso.double        $3.50
  latte.iced             $5.50
  cortado                $4.00
  cold_brew.nitro        $5.75

$ order --item=cold_brew.oat_milk
  Processing order...
  Order #CBC-042 confirmed
  ✓ Ready in 3 minutes

$ loyalty --check
  Points balance: 240pts
  Next reward:    60pts away
  Status:         Regular ✓

$ menu --specials
  TODAY'S SPECIAL:
  cold_brew.lavender
  --honey --oat-milk
  Limited: 8 remaining
  Price: $6.00

$ git init cold-brew-code
  Initialized empty repository
  ✓ Ready

$ git add --all
$ git commit -m "initial brew"
  [main] initial brew
  6 files changed ✓

$ npm install
  Resolving dependencies...
  248 packages added in 3.2s
  ✓ Dependencies installed

$ npm run dev
  VITE v5.0.0 ready in 312ms
  ➜  Local: http://localhost:5173/

$ deploy --env=production
  Bundling assets...
  Optimizing build...
  [████████████████████] 100%
  ✓ Live at coldbrewcode.dev

$ cold-brew-code --help
  Commands:
    grind     Gather requirements
    brew      Begin development
    steep     Let ideas develop
    strain    Code review & QA
    serve     Ship to production
    menu      View service list
    order     Start a project
    status    Check system health

$ brew --batch=2 --client=new
  Loading project specs...
  Checking availability...
  ✓ Slot open: Q3 2026

$ grind --requirements
  Parsing client brief...
  Extracting user stories...
  ✓ 12 tickets created

$ steep --sprint=1
  Running standup...
  Assigning tasks...
  ✓ Sprint started: 2 weeks

$ strain --review
  Running lint...
  Checking types...
  Running tests...
  [████████████████████] 100%
  ✓ 47 tests passed

$ git push origin main
  Enumerating objects...
  Writing objects: 100%
  ✓ Branch main updated

$ deploy --env=staging
  Building for staging...
  Running smoke tests...
  ✓ Staging: ready for review

$ client --feedback
  Received 3 comments
  Status: approved ✓
  ✓ Ready for production

$ invoice --send
  Generating invoice #004...
  ✓ Invoice delivered

$ brew --celebrate
  Pouring a cold one...
  ✓ Well deserved.

$ order --item=cold_brew.nitro
  Order #CBC-043 confirmed
  Nitro tap: flowing ✓

$ loyalty --redeem
  Redeeming 300pts...
  ✓ Free drink applied

$ add --syrup=vanilla --pumps=2
  ✓ Sweetness: optimal

$ temp --check
  Brew temp:   34°F ✓
  Vibe temp:   warm ✓

$ cold-brew-code --team
  Shanna Graves     Full Stack  ✓
  Geoffrey Wortham  Frontend    ✓
  [open slot]       Backend     ...

$ status
  ✓ Coffee:   Sufficient
  ✓ Code:     Compiling
  ✓ Vibes:    Immaculate
  ✓ Uptime:   100%

$ uptime --check
  System online: 99.9%
  Last outage:   never
  ✓ All systems go

`;

function Hero() {
  return(
    <section id="hero" className="hero" aria-labelledby="hero-title">

      <pre className="chalk-terminal-bg" aria-hidden="true" role="presentation" tabIndex="-1">
        {terminalText.repeat(3)}
      </pre>

      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          <img className="hero-wordmark" src="/cb-wordmark-curved.svg" alt="Cold Brew Code" />
        </h1>
        <div className="hero-divider" />
        <p className="hero-tagline">Practical software solutions, brewed fresh.</p>
        <a href="#about" className="hero-cta" aria-label="Learn more about Cold Brew Code">Learn More</a>
      </div>

    </section>
  );
}

export default Hero;
