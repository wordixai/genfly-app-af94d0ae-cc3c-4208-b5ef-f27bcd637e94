import Header from "../components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mt-16">
          <h1 className="text-4xl font-bold mb-6">欢迎来到鱼皮的编程宝典</h1>
          <p className="text-xl text-gray-600 mb-8">
            这里有丰富的编程学习资源、技术知识和实用工具，帮助你成为更优秀的开发者。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <FeatureCard 
              title="学习路线" 
              description="系统化的编程学习路径，从入门到精通" 
            />
            <FeatureCard 
              title="项目实战" 
              description="实际开发项目案例，提升实战能力" 
            />
            <FeatureCard 
              title="技术知识" 
              description="深入浅出的技术文章和知识点解析" 
            />
            <FeatureCard 
              title="编程导航" 
              description="精选优质编程资源，助你快速成长" 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;