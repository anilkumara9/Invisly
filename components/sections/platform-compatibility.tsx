import { BarChart2 } from 'lucide-react';
import Image from 'next/image';

interface Platform {
  name: string;
  description: string;
  logo: string;
  status: 'Undetectable' | 'Conditional';
}

const platforms: Platform[] = [
  {
    name: "Zoom",
    description: "Video Meetings",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4665bd99-73a5-46b4-a376-271ea3fe90a1-invisiblebrowser-in/assets/icons/zoom-png-logo-download-transparent-20-2.png",
    status: "Undetectable"
  },
  {
    name: "Microsoft Teams",
    description: "Team Calls",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4665bd99-73a5-46b4-a376-271ea3fe90a1-invisiblebrowser-in/assets/icons/Microsoft-Teams-Logo-3.png",
    status: "Undetectable"
  },
  {
    name: "Google Meet",
    description: "Web Meetings",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4665bd99-73a5-46b4-a376-271ea3fe90a1-invisiblebrowser-in/assets/icons/Google_Meet-Logo.wine-4.png",
    status: "Undetectable"
  },
  {
    name: "Hackerrank",
    description: "Coding Interviews",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4665bd99-73a5-46b4-a376-271ea3fe90a1-invisiblebrowser-in/assets/icons/160_Hackerrank_logo_logos-512-5.png",
    status: "Undetectable"
  },
  {
    name: "TeamViewer",
    description: "Remote Access",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/TeamViewer_Logo_Icon_Only.svg",
    status: "Undetectable"
  },
  {
    name: "AnyDesk",
    description: "Remote Desktop",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4665bd99-73a5-46b4-a376-271ea3fe90a1-invisiblebrowser-in/assets/icons/1200x630wa-6.png",
    status: "Undetectable"
  }
];

const PlatformStatusBadge = ({ status }: { status: Platform['status'] }) => {
  const isUndetectable = status === 'Undetectable';

  const badgeClasses = isUndetectable
    ? 'bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
    : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.2)]';

  const dotClasses = isUndetectable ? 'bg-green-400' : 'bg-yellow-400';

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${badgeClasses}`}>
      <div className={`w-2 h-2 rounded-full ${dotClasses}`} />
      <span>{status}</span>
    </div>
  );
};

const PlatformCompatibility = () => {
  return (
    <section id="compatibility" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-center">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 rounded-full text-sm text-yellow-300 font-medium mb-4 sm:mb-6">
          <BarChart2 className="w-4 h-4 text-yellow-300" />
          Platform Status
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
          Does <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">Invisly</span> Work Here?
        </h2>
        <p className="text-lg sm:text-xl text-[#B4B4B4] max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
          Check platform compatibility before your session
        </p>

        <div className="rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center gap-4 text-center p-6">
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="h-10 sm:h-12 object-contain"
                />
                <div className="flex-grow">
                  <h3 className="font-bold text-white text-base sm:text-lg">{platform.name}</h3>
                  <p className="text-[#B4B4B4] text-xs sm:text-sm">{platform.description}</p>
                </div>
                <PlatformStatusBadge status={platform.status} />
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#B4B4B4] mt-8">
          Status updates in real-time • Last checked: Today
        </p>
      </div>
    </section>
  );
};

export default PlatformCompatibility;