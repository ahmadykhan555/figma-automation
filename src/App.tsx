import heroSlide from "./assets/hero-slide.png";
import { Button } from "./components/generated/button/button";
import { FeatureCardDemo } from "./components/generated/feature-card/feature-card-demo";
import { Hero } from "./components/generated/hero/hero";
import { HeroIndicator } from "./components/generated/hero/hero-indicator";
import { Navbar } from "./components/generated/navbar/navbar";
import { NavbarAction } from "./components/generated/navbar/navbar-action";
import { NavbarLink } from "./components/generated/navbar/navbar-link";
import { ShopHeader } from "./components/generated/shop-header/shop-header";
import { TopBar } from "./components/generated/top-bar/top-bar";
import { TopBarItem } from "./components/generated/top-bar/top-bar-item";
import { CartXsIcon } from "./components/icons/cart-xs-icon";
import { ChevronDownXsIcon } from "./components/icons/chevron-down-xs-icon";
import { ChevronHeroLeftIcon } from "./components/icons/chevron-hero-left-icon";
import { ChevronHeroRightIcon } from "./components/icons/chevron-hero-right-icon";
import { EmailXsIcon } from "./components/icons/email-xs-icon";
import { FacebookXsIcon } from "./components/icons/facebook-xs-icon";
import { HeartXsIcon } from "./components/icons/heart-xs-icon";
import { InstagramXsIcon } from "./components/icons/instagram-xs-icon";
import { PhoneXsIcon } from "./components/icons/phone-xs-icon";
import { SearchXsIcon } from "./components/icons/search-xs-icon";
import { TwitterXsIcon } from "./components/icons/twitter-xs-icon";
import { UserXsIcon } from "./components/icons/user-xs-icon";
import { YoutubeXsIcon } from "./components/icons/youtube-xs-icon";

function App() {
  return (
    <main className="min-h-svh bg-zinc-50 text-zinc-900">
      <ShopHeader
        topBar={
          <TopBar
            start={
              <>
                <TopBarItem iconStart={<PhoneXsIcon />}>
                  (225) 555-0118
                </TopBarItem>
                <TopBarItem iconStart={<EmailXsIcon />}>
                  michelle.rivera@example.com
                </TopBarItem>
              </>
            }
            center="Follow Us and get a chance to win 80% off"
            end={
              <>
                <span>Follow Us :</span>
                <InstagramXsIcon />
                <YoutubeXsIcon />
                <FacebookXsIcon />
                <TwitterXsIcon />
              </>
            }
          />
        }
        navbar={
          <Navbar
            brand="Bandage"
            nav={
              <>
                <NavbarLink href="#">Home</NavbarLink>
                <NavbarLink href="#" tone="strong" iconEnd={<ChevronDownXsIcon />}>
                  Shop
                </NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Blog</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
                <NavbarLink href="#">Pages</NavbarLink>
              </>
            }
            actions={
              <>
                <NavbarAction iconStart={<UserXsIcon />}>
                  Login / Register
                </NavbarAction>
                <NavbarAction iconStart={<SearchXsIcon />} />
                <NavbarAction iconStart={<CartXsIcon />}>1</NavbarAction>
                <NavbarAction iconStart={<HeartXsIcon />}>1</NavbarAction>
              </>
            }
          />
        }
      >
        <Hero
          background={
            <img
              src={heroSlide}
              alt=""
              className="size-full object-cover"
            />
          }
          eyebrow="SUMMER 2020"
          heading="NEW COLLECTION"
          description={
            <>
              We know how large objects will act,
              <br />
              but things on a small scale.
            </>
          }
          CTA={
            <Button tone="success" size="lg">
              SHOP NOW
            </Button>
          }
          controlPrev={<ChevronHeroLeftIcon />}
          controlNext={<ChevronHeroRightIcon />}
          indicators={
            <>
              <HeroIndicator active />
              <HeroIndicator />
            </>
          }
        />
      </ShopHeader>

      <FeatureCardDemo />
    </main>
  );
}

export default App;
