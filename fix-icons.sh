#!/bin/bash

echo "🔄 Replacing lucide-react with react-icons..."

cd client

# Replace the import statement
find src -name "*.tsx" -type f -exec sed -i '' "s/from 'lucide-react'/from 'react-icons\/hi'/g" {} \;

# Replace specific icons with react-icons equivalents
find src -name "*.tsx" -type f -exec sed -i '' "s/Phone/HiPhone/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/MessageCircle/HiChatAlt2/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Menu/HiMenu/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/X/HiX/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/ChevronDown/HiChevronDown/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/ChevronLeft/HiChevronLeft/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/ChevronRight/HiChevronRight/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Globe/HiGlobe/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/User/HiUser/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Briefcase/HiBriefcase/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/GraduationCap/HiAcademicCap/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Plane/HiPaperAirplane/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Home/HiHome/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/FileText/HiDocumentText/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Users/HiUsers/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/HelpCircle/HiQuestionMarkCircle/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Heart/HiHeart/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/CheckCircle/HiCheckCircle/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/ArrowRight/HiArrowRight/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Star/HiStar/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Quote/HiChat/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Building2/HiOfficeBuilding/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/UserCheck/HiUserCheck/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Sparkles/HiSparkles/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Shield/HiShieldCheck/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Zap/HiLightningBolt/g" {} \;
find src -name "*.tsx" -type f -exec sed -i '' "s/Award/HiAward/g" {} \;

echo "✅ Icon replacement complete!"
echo "🧪 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! lucide-react issues resolved."
else
    echo "❌ Build failed. Please check the errors above."
fi
