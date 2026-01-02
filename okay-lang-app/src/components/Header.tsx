export default function Header(){
    return(
      <header className="w-full h-12.5 p-3 flex items-center justify-between bg-transparent">
        <div className="flex items-center">
          <img src="/svg/okay-lang-logo.svg" alt="Okay Lang App Logo"></img>
          <h1 className="text-charcoal text-[16px]">Okay Lang</h1>
        </div>
        <img src="/svg/i-icon.svg" alt="Information Logo"></img>
      </header>
    )
}