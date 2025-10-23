import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

// Custom SVG icons for social platforms not in lucide-react
const VimeoIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
  </svg>
);

const DribbbleIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm8.722 6.094c1.456 1.778 2.353 4.053 2.444 6.531-.394-.084-4.331-.878-8.284-.384-.084-.203-.169-.406-.269-.609-.291-.675-.606-1.344-.938-1.997 4.247-1.731 6.172-4.219 6.047-4.541zM12 2.222c2.731 0 5.225 1.041 7.091 2.747-.084.281-1.772 2.588-5.856 4.116C11.544 6.322 9.647 3.928 9.394 3.572 10.219 2.803 11.075 2.222 12 2.222zM7.406 4.303c.241.338 2.106 2.75 3.816 5.494-4.819 1.281-9.072 1.262-9.534 1.247.647-3.028 2.709-5.541 5.719-6.741zM2.203 12.016v-.394c.453.009 5.513.075 10.678-1.484.422.825.806 1.669 1.172 2.512-.147.044-.3.084-.453.131-5.344 1.722-8.194 6.447-8.338 6.844-1.725-1.95-2.772-4.512-2.059-7.609zm9.797 9.762c-2.466 0-4.725-.9-6.469-2.381.113-.403 2.259-4.622 8.141-6.694.028-.009.053-.019.084-.028.675 1.753 1.266 3.581 1.688 5.478-1.072.431-2.241.625-3.444.625zm5.484-1.978c-.253-1.472-.778-3.084-1.391-4.669 3.681-.591 6.919.422 7.278.572-.497 2.944-2.134 5.478-4.887 6.097z"/>
  </svg>
);

const SoundCloudIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.051 0-.078.046-.084.098l-.21 1.324.21 1.283c.006.05.037.096.084.096.053 0 .082-.046.09-.096l.232-1.283-.232-1.324c-.008-.05-.037-.098-.09-.098m1.804-1.497c-.06 0-.106.052-.113.109l-.229 2.693.229 2.595c.007.06.053.11.113.11.056 0 .099-.05.106-.11l.255-2.595-.255-2.693c-.007-.057-.05-.11-.106-.11m.903-.21c-.06 0-.111.058-.118.121l-.21 2.9.21 2.802c.007.06.058.117.118.117.066 0 .111-.057.119-.117l.237-2.802-.237-2.9c-.008-.063-.053-.121-.119-.121m.899-.41c-.068 0-.118.057-.127.125l-.21 3.31.21 3.206c.009.068.059.125.127.125.066 0 .12-.057.129-.125l.236-3.206-.236-3.31c-.009-.068-.063-.125-.129-.125m.924-.119c-.075 0-.131.062-.14.134l-.193 3.429.193 3.321c.009.072.065.134.14.134.067 0 .125-.062.134-.134l.214-3.321-.214-3.429c-.009-.072-.067-.134-.134-.134m.89-.134c-.075 0-.136.066-.145.14l-.168 3.563.168 3.443c.009.075.07.14.145.14.072 0 .134-.065.142-.14l.193-3.443-.193-3.563c-.008-.074-.07-.14-.142-.14m.878 0c-.076 0-.138.066-.147.14l-.146 3.563.146 3.443c.009.075.071.14.147.14.074 0 .136-.065.145-.14l.168-3.443-.168-3.563c-.009-.074-.071-.14-.145-.14m.88 0c-.075 0-.137.066-.146.14l-.132 3.563.132 3.443c.009.075.071.14.146.14.075 0 .139-.065.148-.14l.168-3.443-.168-3.563c-.009-.074-.073-.14-.148-.14m.878 0c-.076 0-.138.066-.146.14l-.129 3.563.129 3.443c.008.075.07.14.146.14.075 0 .138-.065.147-.14l.168-3.443-.168-3.563c-.009-.074-.072-.14-.147-.14m.883.07c-.076 0-.139.063-.148.134l-.118 3.493.118 3.373c.009.071.072.131.148.131.074 0 .137-.06.146-.131l.148-3.373-.148-3.493c-.009-.071-.072-.134-.146-.134m2.273-4.306c-.068 0-.123.056-.134.125l-.13 7.799.13 3.149c.011.068.066.125.134.125.07 0 .125-.057.137-.125l.148-3.149-.148-7.799c-.012-.069-.067-.125-.137-.125m-.896.82c-.068 0-.125.058-.134.128l-.129 6.979.129 3.125c.009.07.066.128.134.128.066 0 .123-.058.134-.128l.148-3.125-.148-6.979c-.011-.07-.068-.128-.134-.128m1.804-.82c-.079 0-.141.066-.153.144l-.118 7.649.118 3.093c.012.078.074.144.153.144.075 0 .137-.066.148-.144l.139-3.093-.139-7.649c-.011-.078-.073-.144-.148-.144m.888.82c-.076 0-.138.065-.149.143l-.109 6.829.109 3.068c.011.078.073.143.149.143.074 0 .137-.065.147-.143l.125-3.068-.125-6.829c-.01-.078-.073-.143-.147-.143m.879-1.761c-.068 0-.125.058-.137.134l-.129 8.59.129 3.042c.012.076.069.134.137.134.068 0 .126-.058.137-.134l.148-3.042-.148-8.59c-.011-.076-.069-.134-.137-.134m.887.941c-.068 0-.125.057-.137.125l-.118 7.649.118 3.018c.012.068.069.125.137.125.069 0 .125-.057.139-.125l.139-3.018-.139-7.649c-.014-.068-.07-.125-.139-.125m2.308-.12c-.154 0-.28.13-.292.289l-.094 6.828.094 2.968c.012.159.138.289.292.289.152 0 .277-.13.289-.289l.104-2.968-.104-6.828c-.012-.159-.137-.289-.289-.289m-1.425-1.099c-.068 0-.126.057-.138.134l-.118 7.768.118 2.994c.012.076.07.134.138.134.07 0 .126-.058.139-.134l.138-2.994-.138-7.768c-.013-.077-.069-.134-.139-.134m4.864 2.437c-.152 0-.277.129-.289.288l-.085 5.655.085 2.883c.012.159.137.288.289.288.153 0 .278-.129.291-.288l.095-2.883-.095-5.655c-.013-.159-.138-.288-.291-.288m-1.432-.105c-.16 0-.291.136-.302.302l-.085 5.758.085 2.859c.011.166.142.302.302.302.159 0 .29-.136.301-.302l.096-2.859-.096-5.758c-.011-.166-.142-.302-.301-.302m-1.428-.106c-.167 0-.302.143-.313.318l-.094 5.864.094 2.836c.011.175.146.318.313.318.166 0 .301-.143.312-.318l.105-2.836-.105-5.864c-.011-.175-.146-.318-.312-.318m4.292.211c-.145 0-.263.122-.274.273l-.096 5.653.096 2.907c.011.151.129.273.274.273.145 0 .263-.122.275-.273l.107-2.907-.107-5.653c-.012-.151-.13-.273-.275-.273m1.403.117c-.138 0-.251.115-.262.258l-.107 5.536.107 2.883c.011.143.124.258.262.258.137 0 .25-.115.261-.258l.118-2.883-.118-5.536c-.011-.143-.124-.258-.261-.258m1.403.211c-.13 0-.237.109-.248.247l-.118 5.325.118 2.859c.011.138.118.247.248.247.13 0 .236-.109.248-.247l.129-2.859-.129-5.325c-.012-.138-.118-.247-.248-.247m1.424.134c-.123 0-.225.104-.236.232l-.13 5.191.13 2.835c.011.128.113.232.236.232.122 0 .224-.104.235-.232l.139-2.835-.139-5.191c-.011-.128-.113-.232-.235-.232"/>
  </svg>
);

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Water Ripple Effects */}
      <div className="absolute inset-0 z-0 ripple-container">
        <div 
          className="absolute inset-0 ripple-layer"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-8 py-12 md:px-16 lg:px-24">
        {/* Main Content - Centered Vertically */}
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="font-serif text-6xl font-light leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
            Your Name
          </h1>
          <h2 className="mt-4 font-serif text-3xl font-light text-primary-foreground/90 md:text-4xl lg:text-5xl">
            Designer & <br className="md:hidden" />
            Art Director
          </h2>
        </div>

        {/* Footer Content */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="space-y-2 text-primary-foreground/90">
            <p className="text-lg font-light">
              Contact <span className="ml-4">hello@yourname.com</span>
            </p>
            <p className="text-lg font-light">
              Socials <span className="ml-6">@yourname</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground transition-all hover:scale-110 hover:text-primary-foreground/80"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground transition-all hover:scale-110 hover:text-primary-foreground/80"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground transition-all hover:scale-110 hover:text-primary-foreground/80"
              aria-label="Facebook"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground transition-all hover:scale-110 hover:text-primary-foreground/80"
              aria-label="Twitter"
            >
              <Twitter size={32} />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground transition-all hover:scale-110 hover:text-primary-foreground/80"
              aria-label="Vimeo"
            >
              <VimeoIcon size={32} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground transition-all hover:scale-110 hover:text-primary-foreground/80"
              aria-label="Dribbble"
            >
              <DribbbleIcon size={32} />
            </a>
            <a
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground transition-all hover:scale-110 hover:text-primary-foreground/80"
              aria-label="SoundCloud"
            >
              <SoundCloudIcon size={32} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
