import { Button } from './components/Button'
import { Card } from './components/ui/card'
import { Separator } from './components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { InfoIcon, AlertCircle } from 'lucide-react'

function App() {
  return (
    <div className="flex flex-col p-4 bg-zinc-900 min-h-screen">
      {/* Main Score Card */}
      <Card className="p-4 bg-zinc-800 border-zinc-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Trust Score</h2>
          <span className="text-2xl font-bold text-green-400">85%</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <InfoIcon size={16} />
          <span>Based on content analysis</span>
        </div>
      </Card>

      <Separator className="my-4 bg-zinc-700" />

      {/* Analysis Section */}
      <div className="space-y-4">
        <Button className="w-full">
          Analyze Current Page
        </Button>

        {/* Advanced Controls */}
        <Accordion type="single" collapsible>
          <AccordionItem value="advanced">
            <AccordionTrigger className="text-sm">
              Advanced Controls
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="text-yellow-500 mt-1" />
                  <p className="text-sm text-zinc-400">
                    Advanced analysis includes source verification, fact-checking against trusted databases, 
                    and sentiment analysis.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Run Deep Analysis
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default App
