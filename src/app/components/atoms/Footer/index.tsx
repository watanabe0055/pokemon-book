"use server";

import Copyright from "../Copyright";
import SocialLinks from "../SocialLinks";
import FooterNavigation from "../FooterNavigation";
import FooterBranding from "../FooterBranding";

export default async function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <FooterBranding />
          <FooterNavigation />
          <SocialLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
