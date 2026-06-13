import { NextResponse } from "next/server"
import resume from "@/data/resume.json"
import projects from "@/data/projects.json"
import skillsData from "@/data/skills.json"

const systemPrompt = `You are Md. Moinuddin Kamal's AI portfolio assistant. Answer questions about his professional experience, skills, certifications, and projects.

Context:
- Name: ${resume.name}
- Title: ${resume.title}
- Experience: ${resume.experience}
- Bio: ${resume.bio}

Experience:
${resume.experience.map((e) => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join("\n")}

Certifications:
${resume.certifications.map((c) => `- ${c.name} (${c.issuer})`).join("\n")}

Projects:
${projects.map((p) => `- ${p.title}: ${p.impact}`).join("\n")}

Skills Categories:
${skillsData.categories.map((c) => `- ${c.name}: ${c.skills.join(", ")}`).join("\n")}

Be concise, professional, and helpful. If asked about something not in the context, say you don't have that information.`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ response: "Please ask a question!" }, { status: 400 })
    }

    const query = message.toLowerCase()

    if (query.includes("network") || query.includes("mikrotik") || query.includes("cisco") || query.includes("routing")) {
      return NextResponse.json({
        response: `Md. Moinuddin's networking expertise includes:
• MikroTik Certified Network Associate (MTCNA)
• Engineered LAN/MAN/WAN solutions supporting 250+ users with Winbox management
• Deployed Cisco network infrastructure reducing troubleshooting time by 40%
• Planned and configured OLT systems for 40% bandwidth improvement
• Implemented firewall policies and VPN solutions decreasing security incidents by 60%
• Deployed 50+ MikroTik routers with Winbox management`,
      })
    }

    if (query.includes("full stack") || query.includes("web") || query.includes("developer") || query.includes("django") || query.includes("next")) {
      return NextResponse.json({
        response: `Md. Moinuddin's full-stack development expertise:
• Built Pronayon Web Apps with Next.js, Next-Auth, and Tailwind CSS
• Developed IT Asset Management System using Django DRF + Next.js
• Created Stock Price Prediction platform with FastAPI + Next.js
• Built E-Commerce platform with MERN Stack (React, Node.js, MongoDB)
• Django Blog Platform with JWT authentication
• Proficient in: Django/DRF, Next.js, React, Node.js, Express, MongoDB`,
      })
    }

    if (query.includes("ai") || query.includes("machine learning") || query.includes("ml") || query.includes("stock") || query.includes("prediction")) {
      return NextResponse.json({
        response: `Md. Moinuddin's AI/ML project:
• Stock Price Prediction System using LSTM and XGBoost models
• Achieved 8.2% MAPE accuracy on Dhaka Stock Exchange data
• Automated EDA pipelines with 30+ visualizations using Pandas/Seaborn
• Built FastAPI backend with <500ms prediction latency
• Deployed Next.js dashboard with Chart.js visualizations
• Technologies: Python, TensorFlow, XGBoost, FastAPI, Scikit-learn`,
      })
    }

    if (query.includes("erp") || query.includes("odoo") || query.includes("business")) {
      return NextResponse.json({
        response: `Md. Moinuddin's ERP expertise:
• Customized Odoo ERP modules enhancing HR/finance workflow efficiency by 35%
• Automated payroll/attendance systems reducing processing errors by 45%
• Managed cloud-based ERP platforms (Enjazit, Alkawder) for 100+ users
• Ensured 99.9% uptime across all ERP systems`,
      })
    }

    if (query.includes("certification") || query.includes("training")) {
      return NextResponse.json({
        response: `Md. Moinuddin's certifications:
• Training on Web Application (ASP.Net & MVC) - BASIS Institute of Technology & Management (BITM)
• MTCNA - MikroTik Certified Network Associate
• Web Design & Development (MERN Stack) - Programming Hero

Education:
• B.Sc. in Computer Science & Engineering - Southern University Bangladesh (CGPA: 3.01)
• Computer Science & Technology - Chittagong Polytechnic Institute (CGPA: 3.02)`,
      })
    }

    if (query.includes("project") || query.includes("work")) {
      return NextResponse.json({
        response: `Md. Moinuddin's major projects:
• Pronayon Web Apps - Full-stack project management portal with Next.js
• IT Asset & Inventory Management System - Django DRF + Next.js
• Stock Price Prediction ML System - LSTM/XGBoost with FastAPI
• E-Commerce Platform - MERN Stack with payment integration
• Django Blog Platform - With JWT authentication

Which would you like to know more about?`,
      })
    }

    if (query.includes("experience") || query.includes("background") || query.includes("profile")) {
      return NextResponse.json({
        response: `Md. Moinuddin Kamal is a Senior IT Administrator with 12+ years of experience:
• Currently IT Administrator at Pronayon/PDS (2019-Present)
• Previously System Admin at Orange Communication (2018-2019)
• IT Officer at Mohara Asian Apparels Ltd (2017-2018)
• IT Executive at PAN ARAB INTERNATIONAL (2016-2017)
• IT Support at Alchemy Software (2014-2015)

He is also a Junior Full Stack Developer proficient in Django, React, Next.js, and Node.js.`,
      })
    }

    return NextResponse.json({
      response: `I can tell you about Md. Moinuddin's experience in:
• Network Infrastructure (MikroTik, Cisco, LAN/MAN/WAN)
• System Administration (Windows Server, AD, DNS/DHCP)
• Full-Stack Development (Django, Next.js, React, Node.js)
• AI/ML (TensorFlow, XGBoost, Stock Prediction)
• ERP Systems (Odoo, Cloud ERP)
• Security Solutions (Firewall, VPN, CCTV)

What would you like to know more about?`,
    })
  } catch {
    return NextResponse.json({ response: "I'm here to help! Ask me about Md. Moinuddin's experience, skills, or projects." })
  }
}
