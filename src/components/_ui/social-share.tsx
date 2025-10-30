import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/*_FIXME: 
  1. fix deprecated lucide icons with custom ones
  2. prettify icons -- too basic
 */

interface ShareProps {
  url?: string;
  title?: string;
  description?: string;
  triggerStyles?: string;
}

export default function SocialShare({
  url = window.location.href,
  title = "Check this out!",
  description = "I found something interesting to share with you",
  triggerStyles,
}: ShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2] hover:bg-[#0d65d9]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#1DA1F2] hover:bg-[#0d8bd9]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0A66C2] hover:bg-[#084d91]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "bg-[#25D366] hover:bg-[#1fb854]",
    },
    {
      name: "Telegram",
      icon: Send,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#26A5E4] hover:bg-[#1a8ec4]",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "bg-gray-600 hover:bg-gray-700",
    },
  ];

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <span className={` ${triggerStyles}`} title="Share this clone">
          <Share2 size={16} className="-ml-1" />
        </span>
      </PopoverTrigger>
      <PopoverContent className="relative z-9999 -translate-x-10 -translate-y-3 rounded-2xl border-[#2e2e2e]/80 bg-[#101010] shadow-xl shadow-black/90">
        <div className="grid grid-cols-3 gap-4">
          {shareLinks.map((platform) => {
            const Icon = platform.icon;
            return (
              <button
                key={platform.name}
                onClick={() => handleShare(platform.url)}
                className="group flex flex-col items-center gap-2 rounded-xl p-4 transition-colors hover:bg-[#303030]"
              >
                <div
                  className={`${platform.color} flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <span className="text-[0.8rem] font-medium text-white/70">
                  {platform.name}
                </span>
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
