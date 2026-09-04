import { Button } from "./components/generated/button/button";
import { ChevronDownXsIcon } from "./components/icons/chevron-down-xs-icon";
import { ChevronLeftXsIcon } from "./components/icons/chevron-left-xs-icon";
import { ChevronRightXsIcon } from "./components/icons/chevron-right-xs-icon";
import { SettingsXsIcon } from "./components/icons/settings-xs-icon";

function App() {
  return (
    <main className="min-h-svh bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Figma to React
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Button Sm</h1>
        <p className="mt-3 max-w-xl text-zinc-600">
          Generic presentational Button from Figma node 2787:305. Icons passed as{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
            ReactNode
          </code>{" "}
          slots.
        </p>

        <section className="mt-10 space-y-10 rounded-2xl border border-zinc-200 bg-white p-8">
          <div>
            <h2 className="text-sm font-medium text-zinc-500">
              Filled · default radius
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button>Button</Button>
              <Button iconStart={<SettingsXsIcon />}>Button</Button>
              <Button iconEnd={<ChevronDownXsIcon />}>Dropdown</Button>
              <Button
                iconStart={<SettingsXsIcon />}
                iconEnd={<ChevronDownXsIcon />}
              >
                Button
              </Button>
              <Button iconStart={<SettingsXsIcon />} />
              <Button iconStart={<ChevronLeftXsIcon />} />
              <Button iconStart={<ChevronRightXsIcon />} />
              <Button iconStart={<ChevronLeftXsIcon />}>Previous</Button>
              <Button iconEnd={<ChevronRightXsIcon />}>Next</Button>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-zinc-500">Filled · pill</h2>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button radius="pill">Button</Button>
              <Button radius="pill" iconStart={<SettingsXsIcon />}>
                Button
              </Button>
              <Button radius="pill" iconStart={<SettingsXsIcon />} />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-zinc-500">
              Outlined · default / pill
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button variant="outlined">Button</Button>
              <Button variant="outlined" iconStart={<SettingsXsIcon />}>
                Button
              </Button>
              <Button variant="outlined" iconStart={<SettingsXsIcon />} />
              <Button variant="outlined" radius="pill">
                Button
              </Button>
              <Button
                variant="outlined"
                radius="pill"
                iconStart={<SettingsXsIcon />}
              >
                Button
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
