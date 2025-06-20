"use client";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Globe } from "lucide-react";
import { usePathname } from "navigation";

type SelectLanguageProps = {};

const SelectLanguage: React.FC<SelectLanguageProps> = ({ }) => {
  const t = useTranslations("SelectLanguage");

  const pathname = usePathname();
  const language = t("language");

  const [position, setPosition] = useState(language);

  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-white">
          <Globe />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="AR"
            onClick={() => router.push(`/en/${pathname}`)}
          >
            العربية
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="FR"
            onClick={() => router.push(`/fr/${pathname}`)}
          >
            Français
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectLanguage;
