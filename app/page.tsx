import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main>
      <main>
        <div className="space-y-6 text-center">
          <h1 className=
            {cn(
              "text-6xl font-semibold drop-shadow-sm",
              font.className
            )}>
            🔐AUTH
          </h1>
          <p className="text-xl ">
            A simple authentication service
          </p>
          <div>
            <LoginButton mode="modal" asChild>
              <Button variant="secondary" size="lg">
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </main>
  )
}
