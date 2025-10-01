import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-6">ℹ️ About Page</h1>
      <p className="mb-8 text-gray-600">
        This page contains information about the ALX Project 2 setup. Below are some sample buttons.
      </p>

      <div className="flex gap-4 justify-center">
        <Button size="small" shape="rounded-sm">
          Small
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium
        </Button>
        <Button size="large" shape="rounded-full">
          Large
        </Button>
      </div>
    </div>
  );
}
