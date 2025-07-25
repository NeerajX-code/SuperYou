// ✅ CORRECT: pass the icon as a reference, not JSX
import { House, Store, BookUser, MessageCircleQuestionMark } from "lucide-react";

export const navLinks = [
  { label: 'Home', to: '/', icon: House },
  { label: 'Shop', to: '/Shop', icon: Store },
  { label: 'About', to: '/About', icon: BookUser },
  { label: 'FAQ', to: '/Faq', icon: MessageCircleQuestionMark },
];
