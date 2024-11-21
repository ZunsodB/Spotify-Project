import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/clerk-react"
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello user, This is our Shadow music listening app!
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </h1>
  )
}