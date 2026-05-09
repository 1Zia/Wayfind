import type { Metadata } from "next";
import CareersContent from "./careers-content";

export const metadata: Metadata = {
  title: "Careers — Join the WayFind Team",
  description: "Build Pakistan's digital future with us. We're looking for talented designers, developers and marketers.",
};

export default function CareersPage() {
  return <CareersContent />;
}
