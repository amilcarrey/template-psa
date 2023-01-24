export const Footer = () => (
  <footer className="my-auto flex h-[10vh] flex-col items-center justify-center bg-primary text-center text-xs text-white">
      <div className="flex gap-3">
          <div>© COPYRIGHT 2022</div>
          <a href="https://amilcarrey.ar/">
              <p className="transition-all duration-500 hover:scale-105 hover:font-bold">
                  Template PSA
              </p>
          </a>
      </div>
      <div className="mt-2 flex gap-1">
          <div className="font-thin">Template developed with ❤️ by </div>
          <a href="/">
              <p className="font-thin transition-all duration-200 hover:ml-1 hover:rotate-[7deg] hover:scale-125 hover:font-bold">
                  amilcarrey
              </p>
          </a>
      </div>
  </footer>
)
