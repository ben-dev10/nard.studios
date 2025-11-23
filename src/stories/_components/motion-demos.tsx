import {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  ZoomIn,
  BounceInUp,
  SlideUp,
  BackIn,
  ElasticInUp,
} from "@/components/_motion/presets";
import { MotionStagger } from "@/components/_motion/core";
import { Button } from "@/components/ui/button";

export default function MotionDemo() {
  return (
    <main className="font-Geist min-h-screen p-10">
      <div className="_hero text-center">
        <MotionStagger preset="blurIn" staggerDelay={0.6} once={false}>
          <h2>Framer Motion InView Animations</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            recusandae adipisci natus aliquid, debitis minus.
          </p>
          <div className="mt-5 space-x-3">
            <Button> Contact </Button>
            <Button variant="secondary"> Contact </Button>
          </div>
        </MotionStagger>
      </div>

      <div className="_demo-2 mx-auto mt-15 max-w-4xl space-y-30">
        <section>
          <h2 className="mb-8 text-3xl font-bold">Individual Animations</h2>

          <div className="space-y-10">
            <BounceInUp duration={0.6} once={false} amount={0}>
              <div className="rounded-lg bg-blue-600 p-6">
                <h3 className="text-xl font-semibold">BounceIn Up</h3>
                <p className="text-blue-100">Animates from bottom with fade</p>
              </div>
            </BounceInUp>

            <SlideUp
              duration={0.8}
              once={false}
              amount={0.6}
              easing={[0.68, -0.55, 0.265, 1.55]}
            >
              <div className="rounded-lg bg-sky-600 p-6">
                <h3 className="text-xl font-semibold">Slide Up</h3>
                <p className="text-blue-100">Animates from bottom with fade</p>
              </div>
            </SlideUp>

            <FadeUp easing="backInOut" duration={0.8}>
              <div className="rounded-lg bg-purple-400 p-6">
                <h3 className="text-xl font-semibold">Fade Up</h3>
                <p className="text-purple-100">Animates from top with fade</p>
              </div>
            </FadeUp>

            <FadeDown duration={0.6}>
              <div className="rounded-lg bg-purple-600 p-6">
                <h3 className="text-xl font-semibold">Fade Down</h3>
                <p className="text-purple-100">Animates from top with fade</p>
              </div>
            </FadeDown>

            <FadeLeft duration={0.6}>
              <div className="rounded-lg bg-green-600 p-6">
                <h3 className="text-xl font-semibold">Fade Left</h3>
                <p className="text-green-100">Animates from right with fade</p>
              </div>
            </FadeLeft>

            <FadeRight duration={0.6}>
              <div className="rounded-lg bg-orange-600 p-6">
                <h3 className="text-xl font-semibold">Fade Right</h3>
                <p className="text-orange-100">Animates from left with fade</p>
              </div>
            </FadeRight>

            <ZoomIn duration={0.6}>
              <div className="rounded-lg bg-pink-600 p-6">
                <h3 className="text-xl font-semibold">Scale</h3>
                <p className="text-pink-100">Scales up with fade</p>
              </div>
            </ZoomIn>

            <BackIn duration={0.6}>
              <div className="rounded-lg bg-amber-600 p-6">
                <h3 className="text-xl font-semibold">
                  BackIn (easing focused component)
                </h3>
                <p className="text-pink-100">Scales up with fade</p>
              </div>
            </BackIn>

            <ElasticInUp duration={0.6}>
              <div className="rounded-lg bg-pink-400 p-6">
                <h3 className="text-xl font-semibold">
                  Scale (elastic animation)
                </h3>
                <p className="text-pink-100">Scales up with fade</p>
              </div>
            </ElasticInUp>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-bold">Stagger Group Animation</h2>

          <MotionStagger staggerDelay={0.15} once={false}>
            <div className="mb-8 rounded-lg bg-cyan-600 p-6">
              <h3 className="text-xl font-semibold">Item 1</h3>
              <p className="text-cyan-100">First item in stagger sequence</p>
            </div>

            <div className="mb-8 rounded-lg bg-teal-600 p-6">
              <h3 className="text-xl font-semibold">Item 2</h3>
              <p className="text-teal-100">Second item in stagger sequence</p>
            </div>

            <div className="mb-8 rounded-lg bg-emerald-600 p-6">
              <h3 className="text-xl font-semibold">Item 3</h3>
              <p className="text-emerald-100">Third item in stagger sequence</p>
            </div>

            <div className="mb-8 rounded-lg bg-lime-600 p-6">
              <h3 className="text-xl font-semibold">Item 4</h3>
              <p className="text-lime-100">Fourth item in stagger sequence</p>
            </div>
          </MotionStagger>
        </section>

        <div className="h-32" />
      </div>
    </main>
  );
}
