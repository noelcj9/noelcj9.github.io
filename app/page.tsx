import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Zap,
  BarChart3,
  TrendingUp,
  Users,
  Target
} from "lucide-react"

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            Available for opportunities
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">
              Noel John
            </span>
          </h1>
          <h2 className="text-2xl font-bold text-muted-foreground md:text-3xl">
            Solutions Consultant & Business Analyst
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I drive strategic decision-making through data analysis and business intelligence. 
            Passionate about optimizing processes, developing go-to-market strategies, and 
            creating data-driven solutions that deliver measurable business impact.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Link>
          <Link
            href="#contact"
            className={buttonVariants({ variant: "outline" })}
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I&apos;m a solutions consultant and business analyst with expertise in data analysis, 
              strategic planning, and business process optimization. With experience at companies 
              like Axion Ray, Synalytica, and Deloitte, I specialize in transforming complex data 
              into actionable insights that drive business growth.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My background spans from cloud infrastructure and API development to market research 
              and go-to-market strategy. I believe in leveraging technology and data to solve 
              real-world business challenges while maintaining a focus on measurable outcomes.
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">Pandas, Numpy, SQL, Excel</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Server className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">Cloud & APIs</h3>
                  <p className="text-sm text-muted-foreground">AWS, Azure, GCP, APIs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Database className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Business Intelligence</h3>
                  <p className="text-sm text-muted-foreground">KPIs, Analytics, Reporting</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Strategy</h3>
                  <p className="text-sm text-muted-foreground">GTM, Market Research</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-pink-600" />
                <div>
                  <h3 className="font-semibold">Consulting</h3>
                  <p className="text-sm text-muted-foreground">Pre/Post Sales, POC</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="font-semibold">Process Optimization</h3>
                  <p className="text-sm text-muted-foreground">SOPs, Playbooks, Workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border bg-background p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Quadcaffe Platform</h3>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-4">
              Developed a college research platform using big data and LLMs to optimize 
              data pipelines and improve user experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Python</span>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Big Data</span>
              <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">LLMs</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-background p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Oregon Vaccine App</h3>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-4">
              Led client engagement for Arabic version, working on documentation, 
              databases, and APIs with cloud deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">AWS</span>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Azure</span>
              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">APIs</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-background p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Crav Food App</h3>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-4">
              Building a 0-to-1 app to help customers make better-informed food 
              purchase decisions through data-driven insights.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">Market Research</span>
              <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Product Strategy</span>
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">User Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Solutions Consultant</h3>
              <p className="text-muted-foreground">Axion Ray • May 2024 - Present</p>
              <p className="mt-2 text-muted-foreground">
                Analyze complex data sets to drive strategic decision-making, manage POC sales funnel, 
                and redefine GTM strategy with better KPIs and metrics for business development teams.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Founders Office</h3>
              <p className="text-muted-foreground">Synalytica • July 2023 - May 2024</p>
              <p className="mt-2 text-muted-foreground">
                Developed Quadcaffe beta platform, created process playbooks and SOPs, 
                monitored KPIs, and optimized data pipelines using LLMs for improved performance.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Server className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Business Analyst</h3>
              <p className="text-muted-foreground">Deloitte • July 2021 - August 2023</p>
              <p className="mt-2 text-muted-foreground">
                Led Oregon Vaccine Application team, deployed cloud-based applications using AWS and Azure, 
                and supported client patching schedules with 25% efficiency improvement through real-time reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={siteConfig.links.email}
              className={buttonVariants()}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
