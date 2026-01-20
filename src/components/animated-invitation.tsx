"use client";

export function AnimatedInvitation() {
  return (
    <div
      className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-lg shadow-2xl"
    >
      {/* Marble Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-100/90" />

      {/* Top Left Blue Flower */}
      <div className="absolute top-0 h-70 w-70 animate-slide-in-top-left">
        <img
          src="/images/blue_rose.png"
          alt="Blue Flower Decoration"
          className="
          h-full 
          w-full 
          object-contain
          -translate-x-20
          -translate-y-20"
        />
      </div>

      {/* Bottom Right Blue Flower */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-70 w-70 animate-slide-in-bottom-right">
        <img
          src="/images/blue_rose.png"
          alt="Blue Flower Decoration"
          className="
                h-full
                w-full
                object-contain
                rotate-180
                translate-x-20
                translate-y-20
              "
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        {/* Couple Names */}
        <div className="mb-6 animate-fade-up-names">
          <h1 className="font-serif text-5xl font-light text-gray-800">John</h1>
          <p className="my-2 text-lg font-light text-gray-600">AND</p>
          <h1 className="font-serif text-5xl font-light text-gray-800">
            Claudia
          </h1>
        </div>

        {/* Invitation Wording */}
        <div className="mb-8 animate-fade-in-text">
          <p className="mb-2 text-sm uppercase tracking-wider text-gray-600">
            Together with their families
          </p>
          <p className="text-sm font-light text-gray-700">
            Invite you to their wedding celebration
          </p>
        </div>

        {/* Date and Time with Lines */}
        <div className="mb-8 w-full animate-fade-in-date">
          <div className="mb-3 flex items-center justify-center gap-4">
            <div className="h-px flex-1 animate-grow-line bg-gray-400" />
            <p className="text-sm uppercase text-gray-600">Sunday</p>
            <div className="h-px flex-1 animate-grow-line bg-gray-400" />
          </div>
          <div className="mb-1">
            <p className="text-sm text-gray-600">Jan</p>
            <p className="text-6xl font-light text-gray-800">27</p>
          </div>
          <p className="text-sm text-gray-600">at 7 PM</p>
          <p className="mt-2 text-xs text-gray-500">2025</p>
        </div>

        {/* Location Details */}
        <div className="animate-fade-in-location">
          <p className="text-sm text-gray-700">123 Anywhere St., Any City,</p>
          <p className="text-sm text-gray-700">ST 12345</p>
        </div>
      </div>
    </div>
  );
}
