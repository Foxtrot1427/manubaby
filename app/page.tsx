"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, HeartCrack } from "lucide-react";
import confetti from "canvas-confetti";

const photoUrls = [
  "/photos/IMG_6012.jpeg",
  "/photos/IMG_6468.jpeg",
  "/photos/FullSizeRender.jpeg",
  "/photos/IMG_6789.jpeg",
];

export default function Home() {
  const [answer, setAnswer] = useState<"yes" | null>(null);
  const [noStage, setNoStage] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [yesChoice, setYesChoice] = useState<string | null>(null);

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleYes = () => {
    setAnswer("yes");
    triggerConfetti();
  };

  const handleNo = () => {
    if (noStage < 5) {
      setNoStage((prev) => (prev + 1) as any);
    }
  };

  const handleBack = () => {
    setAnswer(null);
    setNoStage(0);
    setYesChoice(null);
  };

  const noLabel =
    noStage === 0
      ? "No"
      : noStage === 1
        ? "Are you sure?"
        : noStage === 2
          ? "Change your mind"
          : noStage === 3
            ? "Pretty please?"
            : noStage === 4
              ? "Pls :("
              : "";

  const noScaleClass =
    noStage === 0
      ? "scale-100"
      : noStage === 1
        ? "scale-90 mt-60"
        : noStage === 2
          ? "scale-75"
          : noStage === 3
            ? "scale-50 ml-60"
            : noStage === 4
              ? "scale-25"
              : "scale-0";

  const noDisabled = noStage >= 5;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .floating-heart {
          animation: float 3s ease-in-out infinite;
        }

        .pulse-heart {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Photos around box */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top left photo with hearts */}
        <div className="absolute top-6 left-4">
          <div className="relative w-60 h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg rotate-[-6deg]">
            <img
              src={"/photos/IMG_6012.jpeg"}
              alt="memory 1"
              className="w-full h-full object-cover"
            />
          </div>
          <Heart
            className="absolute -top-2 -right-2 w-12 h-12 text-pink-500 fill-pink-500 floating-heart"
            style={{ animationDelay: "0s" }}
          />
          <Heart
            className="absolute -bottom-1 -left-2 w-12 h-12 text-red-400 fill-red-400 pulse-heart"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Top right photo with hearts */}
        <div className="absolute top-4 right-6">
          <div className="relative w-60 h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg rotate-[5deg]">
            <img
              src={photoUrls[1]}
              alt="memory 2"
              className="w-full h-full object-cover"
            />
          </div>
          <Heart
            className="absolute -top-3 -left-2 w-12 h-12 text-pink-400 fill-pink-400 pulse-heart"
            style={{ animationDelay: "0.3s" }}
          />
          <Heart
            className="absolute -bottom-2 -right-1 w-12 h-12 text-red-500 fill-red-500 floating-heart"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Bottom left photo with hearts */}
        <div className="absolute bottom-10 left-8">
          <div className="relative w-60 h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg rotate-[4deg]">
            <img
              src={photoUrls[2]}
              alt="memory 3"
              className="w-full h-full object-cover"
            />
          </div>
          <Heart
            className="absolute -top-2 -right-3 w-12 h-12 text-pink-500 fill-pink-500 floating-heart"
            style={{ animationDelay: "0.7s" }}
          />
          <Heart
            className="absolute -bottom-3 -left-1 w-12 h-12 text-red-400 fill-red-400 pulse-heart"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        {/* Bottom right photo with hearts */}
        <div className="absolute bottom-16 right-10">
          <div className="relative w-60 h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg rotate-[-8deg]">
            <img
              src={photoUrls[3]}
              alt="memory 4"
              className="w-full h-full object-cover"
            />
          </div>
          <Heart
            className="absolute -top-1 -left-2 w-12 h-12 text-pink-400 fill-pink-400 pulse-heart"
            style={{ animationDelay: "0.9s" }}
          />
          <Heart
            className="absolute -bottom-2 -right-2 w-12 h-12 text-red-500 fill-red-500 floating-heart"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* Scattered hearts around the page */}
        <div className="pointer-events-none absolute inset-0 hidden md:block"> 
  <Heart
    className="absolute top-20 left-1/4 w-6 h-6 md:w-12 md:h-12 text-pink-300 fill-pink-300 floating-heart"
    style={{ animationDelay: "0.6s" }}
  />
  <Heart
    className="absolute top-32 right-1/4 w-6 h-6 md:w-12 md:h-12 text-red-300 fill-red-300 pulse-heart"
    style={{ animationDelay: "1.2s" }}
  />
  <Heart
    className="absolute bottom-24 left-1/3 w-6 h-6 md:w-12 md:h-12 text-pink-400 fill-pink-400 floating-heart"
    style={{ animationDelay: "0.8s" }}
  />
  <Heart
    className="absolute bottom-40 right-1/3 w-6 h-6 md:w-12 md:h-12 text-red-400 fill-red-400 pulse-heart"
    style={{ animationDelay: "1.5s" }}
  />
  <Heart
    className="absolute top-1/3 left-12 w-6 h-6 md:w-12 md:h-12 text-pink-500 fill-pink-500 floating-heart"
    style={{ animationDelay: "1.1s" }}
  />
  <Heart
    className="absolute top-1/2 right-12 w-6 h-6 md:w-12 md:h-12 text-red-500 fill-red-500 pulse-heart"
    style={{ animationDelay: "0.3s" }}
  />
</div>

      </div>

      <div className="relative z-10 w-full max-w-md">
        {(answer !== null || yesChoice) && (
          <Button
            variant="ghost"
            className="mb-4 hover:bg-pink-200"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}

        {/* Question */}
        {answer === null && (
          <Card className="p-8 text-center space-y-6 animate-fade-in bg-white/90 backdrop-blur relative">
            {/* Hearts around the card */}
            <Heart
              className="absolute -top-4 -left-4 w-12 h-12 text-pink-500 fill-pink-500 floating-heart"
              style={{ animationDelay: "0.2s" }}
            />
            <Heart
              className="absolute -top-3 -right-5 w-12 h-12 text-red-400 fill-red-400 pulse-heart"
              style={{ animationDelay: "0.8s" }}
            />
            <Heart
              className="absolute -bottom-4 -left-5 w-12 h-12 text-pink-400 fill-pink-400 pulse-heart"
              style={{ animationDelay: "1.3s" }}
            />
            <Heart
              className="absolute -bottom-3 -right-4 w-12 h-12 text-red-500 fill-red-500 floating-heart"
              style={{ animationDelay: "0.5s" }}
            />

            <h1 className="text-3xl font-bold text-pink-600">
              Will you be my Valentine? 💝
            </h1>
            <p className="text-gray-600">Dallu maya</p>
            <div className="flex justify-center gap-4 relative">
              <Button
                onClick={handleYes}
                className="bg-pink-500 hover:bg-pink-600 transform transition-all duration-200 hover:scale-105 active:scale-95"
                size="lg"
              >
                <Heart className="mr-2" /> Yes
              </Button>

              <Button
                onClick={handleNo}
                variant="outline"
                size="lg"
                disabled={noDisabled}
                className={`border-pink-300 hover:bg-pink-50 transform transition-all duration-300 origin-center ${noScaleClass} ${
                  noDisabled ? "pointer-events-none opacity-0" : ""
                }`}
              >
                {!noDisabled && (
                  <>
                    <HeartCrack className="mr-2" />
                    {noLabel}
                  </>
                )}
              </Button>
            </div>
          </Card>
        )}

        {/* Yes flow */}
        {answer === "yes" && (
          <Card className="mt-6 p-8 text-center space-y-6 animate-fade-in bg-white/90 backdrop-blur relative">
            {/* Hearts around success card */}
            <Heart
              className="absolute -top-4 -left-4 w-12 h-12 text-pink-500 fill-pink-500 floating-heart"
              style={{ animationDelay: "0s" }}
            />
            <Heart
              className="absolute -top-3 -right-5 w-12 h-12 text-red-400 fill-red-400 pulse-heart"
              style={{ animationDelay: "0.4s" }}
            />
            <Heart
              className="absolute -bottom-4 -left-5 w-12 h-12 text-pink-400 fill-pink-400 pulse-heart"
              style={{ animationDelay: "0.9s" }}
            />
            <Heart
              className="absolute -bottom-3 -right-4 w-12 h-12 text-red-500 fill-red-500 floating-heart"
              style={{ animationDelay: "0.6s" }}
            />

            <h2 className="text-2xl font-semibold text-pink-600">
              Yaaay! Baby baby baby💖
            </h2>
            <p className="text-gray-600">
              How should we celebrate?
            </p>

            {!yesChoice && (
              <div className="grid grid-cols-1 gap-3">
                <Button
                  variant="outline"
                  className="justify-center border-pink-300 hover:bg-pink-50"
                  onClick={() => setYesChoice("late-night-call")}
                >
                  Late Night Call 
                </Button>
                <Button
                  variant="outline"
                  className="justify-center border-pink-300 hover:bg-pink-50"
                  onClick={() => setYesChoice("movie-night")}
                >
                  Movie Night 
                </Button>
                <Button
                  variant="outline"
                  className="justify-center border-pink-300 hover:bg-pink-50"
                  onClick={() => setYesChoice("long-distance")}
                >
                  Any other Activity
                </Button>
              </div>
            )}

            {yesChoice === "late-night-call" && (
              <p className="text-lg text-gray-700">
                Perfect. I&apos;ll bring the sleepy voice and the cheesy jokes,
                you bring that cute smile of yours.
              </p>
            )}

            {yesChoice === "movie-night" && (
              <p className="text-lg text-gray-700">
                Movie night it is! You pick the movie, I&apos;ll bring the
                snacks and the cuddles (virtual or in-person).
              </p>
            )}

            {yesChoice === "long-distance" && (
              <p className="text-lg text-gray-700">
                Long distance doesn&apos;t stand a chance. Let&apos;s play
                games, watch something together, and pretend we&apos;re in the
                same room.
              </p>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
