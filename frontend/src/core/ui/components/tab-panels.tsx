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
}

export function TabPanels({
  defaultValue,
  panels,
}: TabPanelsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="flex gap-2">
        {panels.map(({ value, label }) => (
          <TabsTrigger value={value} className="flex-grow">
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {panels.map(({ value, title, description, content }) => (
        <TabsContent value={value}>
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
