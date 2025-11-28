// app/page.tsx
'use client';
import { useState } from 'react';
import Loading from '../components/Loading';
import ConfirmationModal from '../components/ConfirmationModal';
import PopupModal from '../components/PopupModal';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardFooter from '../components/CardFooter';

export default function Home() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isPopupModalOpen, setIsPopupModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVariant, setModalVariant] = useState<'danger' | 'warning' | 'success'>('danger');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleConfirmAction = () => {
    console.log('Action confirmed!');
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Component Library Showcase
        </h1>

        {/* Color Test Section */}
        <section className="mb-12">
          <CardHeader 
            title="Color Test" 
            subtitle="Verify your Tailwind colors are working"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="text-center">
              <div className="bg-green-500 text-white p-4 rounded-lg">
                This should be green if colors are working!
              </div>
            </Card>
            <Card className="text-center">
              <div className="bg-green-100 text-green-900 p-4 rounded-lg">
                This should be light green with dark green text!
              </div>
            </Card>
          </div>
        </section>

        {/* Loading Component Section */}
        <section className="mb-12">
          <CardHeader 
            title="Loading Components" 
            subtitle="Different sizes and states"
          />
          <Card>
            <div className="flex flex-wrap items-center justify-around gap-8">
              <div className="text-center">
                <Loading size="sm" />
                <p className="mt-2 text-sm text-gray-600">Small</p>
              </div>
              <div className="text-center">
                <Loading size="md" text="Loading content..." />
                <p className="mt-2 text-sm text-gray-600">Medium with text</p>
              </div>
              <div className="text-center">
                <Loading size="lg" text="Please wait..." />
                <p className="mt-2 text-sm text-gray-600">Large with text</p>
              </div>
              {loading && (
                <div className="text-center w-full">
                  <Loading size="md" text="Simulating API call..." />
                </div>
              )}
            </div>
            <CardFooter justify="center">
              <Button 
                variant="primary" 
                onClick={simulateLoading}
                loading={loading}
              >
                Simulate Loading
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Card Components Section */}
        <section className="mb-12">
          <CardHeader 
            title="Card Components" 
            subtitle="Different card styles and layouts"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card padding="sm" hover>
              <CardHeader 
                title="Basic Card"
                subtitle="With hover effect"
              />
              <p className="text-gray-600 text-sm">
                This card has small padding and hover effect.
              </p>
            </Card>

            <Card padding="md" shadow="lg">
              <CardHeader 
                title="Featured Card"
                subtitle="With large shadow"
              />
              <p className="text-gray-600">
                This card has medium padding and large shadow for emphasis.
              </p>
              <CardFooter>
                <Button variant="primary" size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card padding="lg" border={false}>
              <CardHeader 
                title="Minimal Card"
                subtitle="No borders, clean look"
              />
              <p className="text-gray-600">
                This card has large padding and no border for a minimal appearance.
              </p>
              <CardFooter justify="between">
                <Button variant="ghost" size="sm">Learn More</Button>
                <Button variant="outline" size="sm">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Button Components Section */}
        <section className="mb-12">
          <CardHeader 
            title="Button Components" 
            subtitle="All variants and sizes"
          />
          <Card>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Button Variants</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-3">Button Sizes</h4>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-3">Loading State</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" loading>
                    Loading...
                  </Button>
                  <Button variant="outline" loading>
                    Processing...
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Input Components Section */}
        <section className="mb-12">
          <CardHeader 
            title="Input Components" 
            subtitle="Different input types and states"
          />
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Text Input"
                placeholder="Enter some text..."
                value={name}
                onChange={setName}
              />
              <Input
                label="Email Input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={setEmail}
                required
              />
              <Input
                label="Password Input"
                type="password"
                placeholder="Enter your password"
                value=""
                onChange={() => {}}
                helperText="Must be at least 8 characters"
              />
              <Input
                label="Input with Error"
                value=""
                onChange={() => {}}
                error="This field is required"
                required
              />
            </div>
          </Card>
        </section>

        {/* Modal Triggers Section */}
        <section className="mb-12">
          <CardHeader 
            title="Modal Components" 
            subtitle="Confirmation and popup modals"
          />
          <Card>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Confirmation Modals</h4>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="danger" 
                    onClick={() => {
                      setModalVariant('danger');
                      setIsConfirmationModalOpen(true);
                    }}
                  >
                    Open Danger Confirmation
                  </Button>
                  <Button 
                    variant="warning" 
                    onClick={() => {
                      setModalVariant('warning');
                      setIsConfirmationModalOpen(true);
                    }}
                  >
                    Open Warning Confirmation
                  </Button>
                  <Button 
                    variant="success" 
                    onClick={() => {
                      setModalVariant('success');
                      setIsConfirmationModalOpen(true);
                    }}
                  >
                    Open Success Confirmation
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-3">Popup Modal</h4>
                <Button 
                  variant="primary" 
                  onClick={() => setIsPopupModalOpen(true)}
                >
                  Open Popup Modal
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Combined Components Example */}
        <section className="mb-12">
          <CardHeader 
            title="Combined Components Example" 
            subtitle="How components work together"
          />
          <Card className="max-w-2xl mx-auto">
            <CardHeader 
              title="User Profile Form"
              subtitle="Complete your profile information"
              action={
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              }
            />
            
            <div className="space-y-4">
              <Input
                label="Full Name"
                value={name}
                onChange={setName}
                placeholder="Enter your full name"
                required
              />
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Enter your email address"
                required
              />
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Loading size="sm" />
                <span className="text-sm text-gray-500">Checking availability...</span>
              </div>
            </div>

            <CardFooter justify="between">
              <Button 
                variant="ghost" 
                onClick={() => setIsConfirmationModalOpen(true)}
              >
                Delete Profile
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">
                  Cancel
                </Button>
                <Button variant="primary">
                  Save Changes
                </Button>
              </div>
            </CardFooter>
          </Card>
        </section>

        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={() => setIsConfirmationModalOpen(false)}
          onConfirm={handleConfirmAction}
          title={`${modalVariant.charAt(0).toUpperCase() + modalVariant.slice(1)} Action`}
          message={`Are you sure you want to perform this ${modalVariant} action? This action cannot be undone.`}
          confirmText="Yes, Continue"
          cancelText="Cancel"
          variant={modalVariant}
        />

        {/* Popup Modal */}
        <PopupModal
          isOpen={isPopupModalOpen}
          onClose={() => setIsPopupModalOpen(false)}
          title="Sample Popup Modal"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              This is a sample popup modal using your PopupModal component. 
              You can put any content here including forms, images, or other components.
            </p>
            
            <Input
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChange={setName}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={setEmail}
            />

            <CardFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsPopupModalOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                onClick={() => {
                  console.log('Form submitted!');
                  setIsPopupModalOpen(false);
                }}
              >
                Submit
              </Button>
            </CardFooter>
          </div>
        </PopupModal>
      </div>
    </div>
  );
}