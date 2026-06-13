"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowRight, TrendingUp, TrendingDown, ExternalLink } from "lucide-react"
import projects from "@/data/projects.json"

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[number]>(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise infrastructure projects with measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer group h-full"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.impact}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  {selectedProject.category}
                </Badge>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.impact}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-semibold text-destructive mb-2">The Problem</h4>
                  <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">The Solution</h4>
                  <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Results</h4>
                  <div className="grid gap-3">
                    {selectedProject.results.map((result, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                      >
                        <span className="text-sm font-medium">{result.metric}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-muted-foreground line-through">{result.before}</span>
                          <ArrowRight className="w-3 h-3 text-primary" />
                          <span className="text-sm font-semibold text-emerald-400">{result.after}</span>
                          <Badge variant={result.change.startsWith("+") ? "success" : "warning"} className="text-xs">
                            {result.change.startsWith("+") ? (
                              <TrendingUp className="w-3 h-3 mr-1" />
                            ) : (
                              <TrendingDown className="w-3 h-3 mr-1" />
                            )}
                            {result.change}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
