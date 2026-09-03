function App() {
  return (
    <main className="min-h-svh bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Figma to React
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Component gallery
        </h1>
        <p className="mt-3 max-w-xl text-zinc-600">
          Paste a Figma node URL in Cursor Agent and ask it to generate a
          presentational React component. Generated UI will show up here.
        </p>

        <section className="mt-10 rounded-xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
          <p className="text-sm font-medium text-zinc-800">No components yet</p>
          <p className="mt-2 text-sm text-zinc-500">
            Generated files will land in{' '}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-700">
              src/components/generated
            </code>
          </p>
        </section>
      </div>
    </main>
  )
}

export default App
