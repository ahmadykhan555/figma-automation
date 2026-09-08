import featureHeadphones from "../../../assets/feature-headphones.jpg";
import { CoolIcon15Icon } from "../../icons/cool-icon-15-icon";
import { FeatureCard } from "./feature-card";

const description =
  "Things on a very small scale behave like nothing that you have any direct experience about.";

export function FeatureCardDemo() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12">
      <FeatureCard
        mediaFrame="number"
        media={<span className="text-h3">01</span>}
        heading="Easy to use"
        description={description}
      />
      <FeatureCard
        mediaFrame="circle"
        media={<CoolIcon15Icon className="text-white" />}
        accent="border"
        heading="Security"
        description={description}
      />
      <FeatureCard
        tone="dark"
        mediaFrame="square"
        media={<CoolIcon15Icon className="text-white" />}
        heading="Easy to use"
        description={description}
      />
      <FeatureCard
        mediaFrame="image"
        media={
          <img
            src={featureHeadphones}
            alt=""
            className="size-full object-cover"
          />
        }
        heading="Easy to use"
        description={description}
      />
      <div className="flex flex-wrap gap-4">
        <FeatureCard
          size="sm"
          mediaFrame="circle"
          media={
            <CoolIcon15Icon className="size-card-icon-glyph-sm text-white" />
          }
          heading="Easy to use"
          description={description}
        />
        <FeatureCard
          size="sm"
          tone="dark"
          accent="border"
          mediaFrame="square"
          media={
            <CoolIcon15Icon className="size-card-icon-glyph-sm text-white" />
          }
          heading="Easy to use"
          description={description}
        />
      </div>
    </section>
  );
}
