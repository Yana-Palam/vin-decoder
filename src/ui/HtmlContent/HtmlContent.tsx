import { sanitizeHtml } from "../../utils/sanitizeHtml";

interface HtmlContentProps {
  content: string;
  className?: string;
}

const HtmlContent = ({ content, className }: HtmlContentProps) => {
  if (!content) {
    return null;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(content),
      }}
    />
  );
};

export default HtmlContent;
