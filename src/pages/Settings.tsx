
import React from 'react';
import { Bell, Shield, User, Palette, Globe, VolumeX, Info, Sun, Moon } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Sidebar from '@/components/Sidebar';
import { Checkbox } from '@/components/ui/checkbox';
import { useTheme } from '@/contexts/ThemeContext';

const Settings = () => {
  const { darkMode, toggleDarkMode, themeColor, setThemeColor } = useTheme();
  
  const colorOptions = ['#FF3860', '#FFD700', '#00A7E1', '#14B8A6', '#8B5CF6'];

  return (
    <div className="flex min-h-screen bg-[#FFF9EC] dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        <div className="manga-panel w-full p-4 md:p-6 max-w-4xl mx-auto dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6">
            <h1 className="text-3xl font-['Bangers'] text-black dark:text-white mb-4">Settings</h1>
            <p className="font-['Comic_Neue'] text-gray-700 dark:text-gray-300 text-lg">Customize your MangaVerse experience!</p>
          </div>

          <div className="space-y-10 mt-6">
            {/* Account Section */}
            <SettingsSection 
              title="Account" 
              icon={<User className="text-[#FF3860]" size={24} />}
            >
              <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="username" className="font-['Comic_Neue'] text-base font-bold">Username</Label>
                  <Input id="username" defaultValue="manga_lover42" className="border-2 border-black dark:border-gray-600" />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="email" className="font-['Comic_Neue'] text-base font-bold">Email</Label>
                  <Input id="email" type="email" defaultValue="user@example.com" className="border-2 border-black dark:border-gray-600" />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label className="font-['Comic_Neue'] text-base font-bold">Password</Label>
                  <Button variant="outline" className="manga-button bg-white hover:bg-white border-black text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                    Change Password
                  </Button>
                </div>
              </div>
            </SettingsSection>
            
            {/* Appearance Section */}
            <SettingsSection 
              title="Appearance" 
              icon={<Palette className="text-[#FFD700]" size={24} />}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="theme-mode" className="font-['Comic_Neue'] text-base font-bold">Dark Mode</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-['Comic_Neue']">Switch between light and dark themes</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun size={20} className={!darkMode ? "text-[#FFD700]" : ""} />
                    <Switch 
                      id="theme-mode" 
                      checked={darkMode}
                      onCheckedChange={toggleDarkMode}
                      className="data-[state=checked]:bg-[#00A7E1]" 
                    />
                    <Moon size={20} className={darkMode ? "text-[#00A7E1]" : ""} />
                  </div>
                </div>
                
                <div>
                  <Label className="font-['Comic_Neue'] text-base font-bold mb-2 block">Color Theme</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {colorOptions.map((color) => (
                      <div 
                        key={color} 
                        className={`h-10 rounded-full border-4 cursor-pointer ${color === themeColor ? 'border-black dark:border-white' : 'border-transparent'}`} 
                        style={{ backgroundColor: color }}
                        onClick={() => setThemeColor(color as any)}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="font-size" className="font-['Comic_Neue'] text-base font-bold">Font Size</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-['Comic_Neue']">Adjust the text size</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-2 border-black dark:border-gray-600">A-</Button>
                    <span className="font-bold">Aa</span>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-2 border-black dark:border-gray-600">A+</Button>
                  </div>
                </div>
              </div>
            </SettingsSection>
            
            {/* Notifications Section */}
            <SettingsSection 
              title="Notifications" 
              icon={<Bell className="text-[#00A7E1]" size={24} />}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="font-['Comic_Neue'] text-base font-bold">Push Notifications</Label>
                    <p className="text-sm text-gray-500 font-['Comic_Neue']">Receive alerts on your device</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-[#FF3860]" defaultChecked />
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <Label className="font-['Comic_Neue'] text-base font-bold">Notification Types</Label>
                  
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notification-likes" className="border-2 border-black data-[state=checked]:bg-[#FF3860] data-[state=checked]:border-[#FF3860]" defaultChecked />
                      <label htmlFor="notification-likes" className="font-['Comic_Neue'] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Likes and reactions
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notification-comments" className="border-2 border-black data-[state=checked]:bg-[#FF3860] data-[state=checked]:border-[#FF3860]" defaultChecked />
                      <label htmlFor="notification-comments" className="font-['Comic_Neue'] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Comments and replies
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notification-follows" className="border-2 border-black data-[state=checked]:bg-[#FF3860] data-[state=checked]:border-[#FF3860]" defaultChecked />
                      <label htmlFor="notification-follows" className="font-['Comic_Neue'] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        New followers
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notification-mentions" className="border-2 border-black data-[state=checked]:bg-[#FF3860] data-[state=checked]:border-[#FF3860]" defaultChecked />
                      <label htmlFor="notification-mentions" className="font-['Comic_Neue'] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Mentions and tags
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notification-news" className="border-2 border-black data-[state=checked]:bg-[#FF3860] data-[state=checked]:border-[#FF3860]" />
                      <label htmlFor="notification-news" className="font-['Comic_Neue'] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        News and updates
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </SettingsSection>
            
            {/* Privacy & Safety Section */}
            <SettingsSection 
              title="Privacy & Safety" 
              icon={<Shield className="text-[#14B8A6]" size={24} />}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="font-['Comic_Neue'] text-base font-bold">Private Account</Label>
                    <p className="text-sm text-gray-500 font-['Comic_Neue']">Only approved followers can see your posts</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-[#14B8A6]" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="font-['Comic_Neue'] text-base font-bold">Location Sharing</Label>
                    <p className="text-sm text-gray-500 font-['Comic_Neue']">Allow others to see your location</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-[#14B8A6]" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="font-['Comic_Neue'] text-base font-bold">Content Settings</Label>
                    <p className="text-sm text-gray-500 font-['Comic_Neue']">Control who can tag you</p>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="manga-button bg-white hover:bg-white border-black text-black">
                        Configure
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="border-2 border-black">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none font-['Bangers']">Tag Settings</h4>
                          <p className="text-sm text-gray-500 font-['Comic_Neue']">Choose who can tag you in posts</p>
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center">
                            <Checkbox id="allow-everyone" className="border-2 border-black mr-2 data-[state=checked]:bg-[#14B8A6]" defaultChecked />
                            <label htmlFor="allow-everyone" className="font-['Comic_Neue']">Everyone</label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox id="allow-following" className="border-2 border-black mr-2 data-[state=checked]:bg-[#14B8A6]" />
                            <label htmlFor="allow-following" className="font-['Comic_Neue']">People I follow</label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox id="allow-nobody" className="border-2 border-black mr-2 data-[state=checked]:bg-[#14B8A6]" />
                            <label htmlFor="allow-nobody" className="font-['Comic_Neue']">Nobody</label>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <Button variant="outline" className="w-full manga-button border-2 border-black bg-white text-[#FF3860] hover:bg-white">
                    <VolumeX className="mr-2" />
                    Manage Blocked Accounts
                  </Button>
                </div>
              </div>
            </SettingsSection>
            
            {/* Language Section */}
            <SettingsSection 
              title="Language" 
              icon={<Globe className="text-[#8B5CF6]" size={24} />}
            >
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="language" className="font-['Comic_Neue'] text-base font-bold">App Language</Label>
                  <div className="relative">
                    <select 
                      id="language" 
                      className="w-full h-10 pl-3 pr-10 border-2 border-black rounded-md appearance-none font-['Comic_Neue'] bg-white"
                      defaultValue="en"
                    >
                      <option value="en">English</option>
                      <option value="ja">日本語 (Japanese)</option>
                      <option value="es">Español (Spanish)</option>
                      <option value="fr">Français (French)</option>
                      <option value="de">Deutsch (German)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-['Comic_Neue']">This will change the language for the entire application</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="font-['Comic_Neue'] text-base font-bold">Translation</Label>
                    <p className="text-sm text-gray-500 font-['Comic_Neue']">Automatically translate posts to your language</p>
                  </div>
                  <Switch className="data-[state=checked]:bg-[#8B5CF6]" defaultChecked />
                </div>
              </div>
            </SettingsSection>
            
            {/* About Section */}
            <SettingsSection 
              title="About" 
              icon={<Info className="text-[#1EAEDB]" size={24} />}
            >
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-black">
                  <p className="font-['Comic_Neue'] mb-2">MangaVerse v1.0.0</p>
                  <p className="text-sm text-gray-500 font-['Comic_Neue']">© 2023 MangaVerse. All rights reserved.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="manga-button border-black bg-white hover:bg-white font-['Comic_Neue']">
                    Terms of Service
                  </Button>
                  <Button variant="outline" className="manga-button border-black bg-white hover:bg-white font-['Comic_Neue']">
                    Privacy Policy
                  </Button>
                </div>
                
                <Button className="w-full manga-button bg-[#FFD700] hover:bg-[#FFD700] text-black border-2 border-black font-['Bangers']">
                  Check for Updates
                </Button>
              </div>
            </SettingsSection>
            
            <div className="pt-4 pb-10 flex justify-end">
              <Button className="manga-button bg-[#FF3860] hover:bg-[#FF3860] text-white border-2 border-black dark:border-gray-600">
                Save Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsSection = ({ 
  title, 
  icon, 
  children 
}: { 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode 
}) => {
  return (
    <section
      className="bg-white dark:bg-gray-800 rounded-xl border-4 border-black dark:border-gray-700 p-6 transition-colors duration-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white dark:bg-gray-700 rounded-full border-2 border-black dark:border-gray-600">
          {icon}
        </div>
        <h2 className="text-2xl font-['Bangers'] dark:text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Settings;
