import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

interface TabPanelsProps {
  defaultValue: string;
  panels: {
    value: string;
    label: string;
    title: string;
    description?: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export function TabPanels({
  defaultValue,
  panels,
  className,
}: TabPanelsProps) {
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList className="flex gap-2">
        {panels.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex-grow"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {panels.map(({ value, title, description, content }) => (
        <TabsContent key={value} value={value}>
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {description && (
                <CardDescription>
                  {description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {content}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
