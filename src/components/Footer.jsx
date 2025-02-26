const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] text-gray-400 text-sm py-4">
      <div className="max-w-5xl mx-auto">
        <ul className="flex flex-wrap gap-2">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="hover:underline cursor-pointer">Copyright</li>
            <li className="hover:underline cursor-pointer">Terms</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">How YouTube works</li>
            <li className="hover:underline cursor-pointer">Test new features</li>
        </ul>
        <div className="mt-5 text-xs text-gray-500">
          © 2025 Google LLC
        </div>
      </div>
    </footer>
    )
}

export default Footer