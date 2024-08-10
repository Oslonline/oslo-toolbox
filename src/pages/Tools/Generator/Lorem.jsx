import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";
import { Helmet } from "react-helmet";

const loremText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis egestas libero, vitae pretium nisi. Curabitur quis posuere est. Phasellus porttitor, leo non lacinia posuere, magna urna commodo mi, venenatis gravida nunc ligula eu mauris. Aenean imperdiet lorem quam, et vestibulum diam consequat non. Donec lobortis ex sapien, id fermentum neque egestas at. Pellentesque at cursus turpis. Praesent et nisi auctor ante congue ultricies vitae commodo arcu. Vestibulum lacus nisl, viverra eget metus sit amet, tincidunt scelerisque mauris. Aenean vel orci id purus tempor aliquam. Duis ac dignissim nulla. Phasellus vel diam ante. Nullam nunc arcu, pulvinar sit amet molestie vitae, porttitor id justo. Sed aliquam odio a augue hendrerit pharetra. Donec dignissim purus non aliquet euismod.",
  "Suspendisse in pulvinar est. Cras quis ante tempus leo laoreet dapibus auctor non quam. Duis ut nulla vel leo lobortis imperdiet. Nullam vel urna lorem. Curabitur vulputate metus id finibus sagittis. Nullam pellentesque neque mattis diam cursus, faucibus sollicitudin magna rutrum. Curabitur in purus mattis, iaculis mauris at, mattis felis. Pellentesque sit amet eleifend nunc. Nullam et pretium dolor.",
  "Vestibulum ultricies sodales tellus nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sit amet semper nulla, eget imperdiet mi. Morbi pharetra sapien metus, vitae porttitor urna viverra quis. Etiam sit amet vestibulum nibh, a tempus magna. Morbi ut tortor ac elit tempor varius sed sed ex. Sed vel feugiat lectus. Nunc nec pellentesque tellus, sit amet consectetur est. Suspendisse fermentum, libero eu sodales vulputate, arcu enim sollicitudin massa, eu luctus est sem a mauris. Vestibulum non libero pellentesque, imperdiet sem eget, dapibus urna. Suspendisse tincidunt risus metus, in egestas nisi pulvinar lacinia. Pellentesque congue mi arcu, eget feugiat lacus varius eget. Praesent commodo ligula facilisis, consequat ex sed, sagittis mi. Curabitur consectetur, mi ac imperdiet rutrum, mi mauris auctor ex, eget facilisis augue turpis at velit. Mauris vitae feugiat mi. Nam euismod et neque laoreet egestas.",
  "Aliquam tempus sed quam id interdum. Aenean ullamcorper accumsan ligula et sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies dolor justo, a cursus ante hendrerit vel. Quisque vel dictum nunc, vitae commodo nunc. Nulla luctus semper quam nec maximus. Maecenas interdum, ipsum non hendrerit tempus, felis est ultricies nisl, ac pellentesque dui diam a ex. Etiam ut mauris aliquam, vestibulum nibh id, finibus magna.",
  "Aliquam elit urna, aliquam non nunc quis, mattis porttitor nibh. In hac habitasse platea dictumst. Suspendisse facilisis felis faucibus quam eleifend ultricies. Etiam ornare pulvinar volutpat. Nulla ut porta turpis. Quisque diam nisi, malesuada posuere scelerisque nec, maximus vel ex. Cras molestie vel nibh vel vehicula. Nullam nulla massa, consequat in scelerisque in, posuere eu nibh. Vestibulum convallis dolor scelerisque, congue ligula volutpat, tempor diam. Morbi iaculis condimentum orci, vel mattis arcu ultricies ut. Ut tristique imperdiet odio, eget euismod nisi sollicitudin in. Curabitur ut consequat ante.",
  "Integer facilisis mollis elit sit amet facilisis. Nam sit amet elit sem. Mauris eget ligula nisi. Nam at euismod arcu, a finibus turpis. Sed volutpat dolor vel nisi facilisis feugiat in vel nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum congue dignissim. Donec mattis massa non purus ultricies consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  "Cras suscipit, nunc at euismod tincidunt, leo urna pharetra augue, at blandit turpis eros sit amet felis. Maecenas scelerisque eget libero eget elementum. Quisque a aliquet nulla, in dapibus neque. Curabitur eget tincidunt nibh. Aenean quis pretium risus. Vestibulum dignissim in nisi at efficitur. Aenean posuere sem et tincidunt condimentum. Aenean mollis, massa sed tincidunt vestibulum, justo felis vestibulum erat, non suscipit arcu eros at velit. Phasellus hendrerit, purus vel ultrices scelerisque, sem ante porttitor diam, et sollicitudin risus tortor ac neque.",
  "Morbi maximus eros vitae rhoncus faucibus. Cras gravida, ante ut convallis fringilla, urna diam porta erat, porta varius risus magna a sem. Duis auctor luctus lectus et mollis. Ut viverra quis sapien id efficitur. Vivamus vel finibus nisi, eu pretium metus. Aliquam consectetur vulputate pulvinar. Nulla a felis id risus laoreet ultricies mollis eu magna. Suspendisse semper ut risus vel pretium. Aliquam commodo, massa vel pretium porttitor, nulla massa luctus ante, nec vehicula turpis nisi sit amet mauris. Donec in magna eget lectus varius faucibus vel et nisl. Phasellus quis mi nec arcu dictum pellentesque. Vestibulum in mauris a justo suscipit cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ligula dictum, suscipit nunc et, auctor justo.",
  "Suspendisse nisl sem, bibendum at lobortis sed, condimentum ut massa. Aliquam sollicitudin, odio sed lacinia mollis, libero erat facilisis tellus, et pellentesque risus metus quis felis. Nullam semper lectus in ultricies dictum. Fusce est sapien, pellentesque sed nisl at, porta facilisis lorem. Aliquam iaculis nisl nibh, et bibendum libero euismod vitae. Nunc at mi neque. Etiam ligula dui, laoreet nec nisl eu, lacinia finibus mi. Donec id tincidunt sapien, quis malesuada eros. Donec vestibulum rutrum lorem, mollis gravida tellus porttitor ultrices. Etiam efficitur eget metus quis aliquam. Cras vel tellus ut libero iaculis consequat. Pellentesque urna massa, vestibulum eget est ut, facilisis blandit est. Praesent turpis nisi, dignissim vitae dui eu, fermentum maximus libero. Nullam odio orci, sagittis ut quam eget, volutpat lobortis odio. Sed vel dignissim odio.",
  "Vivamus suscipit ante eget massa tincidunt egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque justo ex, elementum sit amet tortor eu, suscipit scelerisque nibh. Phasellus aliquam, leo ut aliquet laoreet, mauris purus tincidunt elit, eu maximus urna neque id nisi. Morbi efficitur feugiat rhoncus. Nullam vehicula nec ligula quis ultrices. Mauris turpis sapien, varius at tempor eget, molestie ut arcu. Maecenas sed facilisis massa. Donec rhoncus venenatis est, sagittis hendrerit erat facilisis in. Phasellus vel erat vel risus maximus hendrerit. Quisque eu nisl metus. Integer consectetur pulvinar sapien ut laoreet. Quisque egestas mi vitae erat semper, at volutpat metus cursus.",
  "Nullam ut fermentum nisi. Proin convallis neque arcu, sed pharetra nisi interdum ut. Quisque eu eleifend urna, id gravida purus. Vestibulum eu lacus in eros imperdiet fringilla eu in lectus. Aenean eu eleifend nisl. Donec placerat rhoncus nisl, et dapibus metus dapibus a. Nam ac arcu id quam vulputate aliquet ac eget mi. Donec aliquet libero et imperdiet varius. Suspendisse eu mollis tellus. Nam posuere leo lacus, sit amet dignissim nunc sagittis et.",
  "Aliquam facilisis convallis lobortis. Maecenas nibh arcu, scelerisque ut est ac, feugiat laoreet odio. Integer pellentesque, est ac scelerisque fringilla, sem tortor mollis metus, sed egestas nisl purus a arcu. Donec hendrerit, quam in sollicitudin tempus, nisi dolor mollis ante, sed pretium justo dui ut lacus. Morbi finibus neque vel nibh cursus tincidunt. Curabitur quis sapien ut libero rutrum gravida et in nisl. Suspendisse leo mauris, tempus sed orci eu, viverra finibus risus. Pellentesque at varius augue. In luctus ligula a neque gravida tempus. Integer sagittis scelerisque aliquet. In vestibulum lectus ac iaculis molestie. Curabitur porta justo ac magna sodales, a tincidunt purus pellentesque. Donec tempus dignissim augue a ornare.",
  "Curabitur feugiat velit augue, non dictum metus vestibulum ut. Praesent accumsan lorem id quam sollicitudin, nec tincidunt nulla sodales. Quisque quis neque eros. Praesent in pellentesque mauris. Fusce eros lorem, aliquam a consequat et, ultrices et metus. Donec lobortis erat nec mauris tempor congue. Morbi sit amet nibh tempor, condimentum metus eu, bibendum arcu. Aliquam et orci rutrum, euismod velit sed, faucibus nisi. Etiam at pharetra mi.",
  "Mauris eu lobortis justo. Proin ipsum eros, aliquam et condimentum eget, eleifend non felis. Vivamus venenatis elit non magna posuere consequat. Pellentesque molestie diam quis rutrum iaculis. Cras mollis pellentesque leo nec rhoncus. Nulla varius quam quis auctor ullamcorper. In vel lacus id nisi ullamcorper pretium sit amet ac orci. Pellentesque at ultricies ligula, ac dictum sapien. Donec viverra, ligula nec tincidunt condimentum, felis elit congue quam, id cursus urna libero id nulla. Cras id congue magna.",
  "Integer non lacus ex. Nulla consectetur odio ut malesuada cursus. Proin venenatis orci vitae velit faucibus scelerisque. Nam at lectus ante. Nullam aliquam lacinia magna sed viverra. Morbi vel interdum ligula, id fringilla mauris. Proin et congue lacus. Duis ut felis magna. Sed euismod dolor sed sapien aliquam, nec dapibus ante gravida. Nam pretium, augue ut commodo laoreet, nulla ligula dictum ante, ut sollicitudin mi dui eget mi. Morbi non feugiat felis, in pharetra felis.",
  "Aliquam gravida lorem purus, eu tincidunt nunc pellentesque non. Phasellus nec bibendum urna. Sed tincidunt erat at est tristique, in consectetur elit tincidunt. Aliquam fringilla lacinia ante, ac dictum mauris posuere sed. Suspendisse sit amet magna a eros fermentum feugiat. Curabitur feugiat ac dolor et consectetur. Integer a sem ut tortor varius efficitur. Aenean vel bibendum dolor. Fusce aliquam malesuada lectus et lacinia. Etiam varius odio ac orci consectetur, ut aliquam tortor ultrices.",
  "Ut ut lectus eget nulla bibendum facilisis sit amet sit amet turpis. Nulla facilisi. Duis at orci vitae est eleifend venenatis vel at turpis. Nam sed neque lacinia, faucibus quam et, euismod libero. Nullam quis velit varius, vehicula sapien at, viverra felis. Phasellus sed magna lacinia, congue purus ac, ullamcorper lectus. Nulla facilisi. Curabitur sit amet eros in est aliquam vehicula. Curabitur fringilla ante ut mauris consectetur, in scelerisque ligula gravida. Aenean ornare eros orci, ut dictum justo condimentum vel. Cras mollis orci non ex lacinia, sed facilisis est sagittis. Integer ac vestibulum ipsum, et fermentum lectus.",
  "Aliquam lacinia lorem nec nisl luctus, in pretium quam interdum. Nulla facilisi. Mauris scelerisque neque a erat sodales cursus. Sed fermentum, ante eget malesuada iaculis, ex dui sollicitudin erat, in interdum ipsum lorem sit amet mauris. Ut fringilla ultricies ex, et tempor sapien auctor id. Pellentesque feugiat varius risus, id condimentum ex ultrices sed. Proin tempor justo eu velit euismod, a tempus nisi scelerisque. Phasellus imperdiet nisi in augue dapibus, a ullamcorper magna euismod. Sed bibendum magna vel mi ullamcorper, ac cursus erat pretium. Duis ut mi mollis, suscipit ligula sed, venenatis orci. Donec non fermentum felis.",
  "Quisque euismod nisi ac purus euismod varius. Duis condimentum ante nisl, et tristique nulla tempor sit amet. Nam id orci eget sapien egestas egestas vel sit amet velit. Nam at neque vel erat consectetur tincidunt nec nec justo. Vestibulum dapibus est in fermentum egestas. Proin tempus purus nec eros pharetra mollis. Duis ultricies diam sit amet nisi faucibus pharetra. Nulla eget turpis augue. Nullam accumsan congue nibh, ut tincidunt ipsum eleifend a. Suspendisse ut est purus. Vivamus aliquet eu lorem nec pretium. Donec auctor lorem eu est vehicula, at facilisis lacus venenatis.",
  "Phasellus convallis auctor nisi sed sollicitudin. Nulla facilisi. Nunc sit amet nunc ac risus interdum ullamcorper. Donec et nisi id velit cursus iaculis. In auctor ante id ipsum feugiat blandit. Morbi molestie, ex ac hendrerit tincidunt, ex urna dignissim nisi, non tincidunt odio mi eget est. In euismod nisi vel est hendrerit, vel consequat mi vulputate. Duis venenatis lorem turpis, at fermentum dui laoreet et. Fusce fringilla euismod libero, id aliquet libero condimentum vel. Mauris bibendum lectus at feugiat sollicitudin.",
  "Nam vitae ante viverra, venenatis elit ac, interdum justo. Donec volutpat sem a ex euismod, vel ornare purus posuere. Aliquam non lectus est. Aenean bibendum augue nec mi aliquet consectetur. Nulla facilisi. Integer nec tristique lectus. Morbi accumsan, urna in interdum ultrices, eros mi volutpat eros, in lacinia sem eros vel ligula. Fusce ac ultricies ante. Donec non dolor orci. In fermentum risus felis, non cursus justo malesuada et.",
  "Curabitur efficitur risus ut dolor posuere, eu sollicitudin urna dignissim. Phasellus sit amet lectus ut arcu pellentesque varius. Donec sed metus id orci posuere dictum non in erat. Cras bibendum lacus id dui tristique, sed pellentesque urna aliquam. Ut dapibus sapien non bibendum suscipit. Nam tincidunt purus ut nibh accumsan, vel fringilla purus bibendum. Suspendisse potenti. Vestibulum pretium bibendum turpis a feugiat. Fusce vel nisi convallis, pellentesque orci id, eleifend nisi. Nunc auctor nunc ut orci tincidunt, eget vestibulum eros ullamcorper. Aliquam erat volutpat.",
  "Duis viverra arcu ut tortor auctor, et convallis nunc dictum. Morbi ultricies elit et felis dictum, non elementum quam rhoncus. In nec vestibulum lorem. Ut ornare eros vel pharetra pretium. Nulla dapibus lorem turpis, at rutrum turpis tincidunt ut. Sed et purus ac libero rhoncus ullamcorper. Nullam vel augue augue. Integer sit amet sapien nec metus condimentum blandit id et ligula. Donec auctor erat vel orci consectetur, ac gravida lacus congue. Etiam sit amet ipsum sit amet mauris tincidunt egestas.",
  "Vestibulum convallis, lorem sed laoreet egestas, felis libero venenatis elit, eget volutpat erat magna et turpis. Nam vitae scelerisque ipsum. Donec sit amet nisi et libero sagittis iaculis. Aliquam ut ante a nisl fringilla ullamcorper ut sit amet elit. Nulla sit amet gravida metus, at facilisis erat. Donec ultricies nibh non enim maximus dapibus. Aenean fringilla risus id velit convallis, a tincidunt sem gravida. Ut vulputate ex felis, eget vulputate tortor vehicula nec. Nullam sollicitudin arcu vitae sagittis vulputate.",
  "Nam in egestas lorem. Quisque venenatis libero sit amet odio maximus, ac feugiat risus rutrum. Ut non lorem ac magna rutrum varius in a orci. Proin et augue ut risus maximus consequat non a ipsum. Aenean suscipit, libero ut ullamcorper pharetra, risus ante sollicitudin nisl, id sodales tortor orci a magna. Sed vel sapien in metus venenatis venenatis ut a felis. Donec in justo nec urna fermentum tincidunt. Nullam faucibus tellus sapien, in viverra ipsum tempus ac. Vestibulum eget lorem et magna maximus scelerisque. Pellentesque sit amet lorem ut sem consectetur varius. Ut sed purus et lacus iaculis iaculis.",
  "Sed mollis fermentum metus, at ultricies ex ullamcorper nec. Aenean nec tincidunt lorem. Curabitur id urna ut arcu aliquam malesuada. Phasellus eget arcu a ante gravida suscipit. Vivamus nec vehicula mauris. Suspendisse ac ligula vel augue maximus rhoncus. Aliquam sit amet leo eu orci tristique varius. Donec facilisis efficitur lacus, vel fringilla nunc feugiat eget. In gravida erat sed nibh suscipit, ac interdum nulla dapibus. Integer malesuada sem et libero convallis, eu blandit nisl pharetra. Morbi a libero vel ante sollicitudin feugiat non ut urna.",
  "Nullam lobortis justo non lectus tempor, at fermentum eros vehicula. Etiam vel diam est. Aliquam sollicitudin orci ut eros tincidunt, id tempus metus maximus. Duis feugiat purus ac ante accumsan, id auctor sapien eleifend. Cras nec nibh gravida, sollicitudin velit nec, vehicula nisi. Sed eget elit sit amet mauris lacinia bibendum. Aenean lacinia quam sit amet enim consectetur, at convallis odio dictum. Vivamus eget urna a lectus luctus ultrices ut nec justo. Praesent mollis et libero ut viverra. Donec ac feugiat mauris, ut bibendum lorem. Fusce interdum felis sit amet varius vulputate.",
  "Maecenas malesuada velit nec volutpat vulputate. Phasellus ut magna a felis lacinia dictum sit amet et ligula. Sed scelerisque nisl eget tellus laoreet, et tempor purus vestibulum. Aenean convallis orci velit, vitae hendrerit risus accumsan sit amet. Ut id lectus in magna fermentum faucibus sit amet ac magna. Proin at vehicula lorem. Donec non dictum velit, nec ultricies nisl. Sed aliquet, lorem ac vehicula commodo, nunc metus vestibulum dolor, non suscipit odio ligula eu velit. Aliquam erat volutpat. Vivamus id nunc efficitur, efficitur magna ac, tristique erat.",
  "Pellentesque eget nisi felis. Suspendisse potenti. Vivamus laoreet sagittis arcu, non suscipit ex ullamcorper vel. Donec dapibus erat eget nibh dictum vestibulum. Cras posuere eros at sapien dignissim, in consequat metus facilisis. Donec et consequat lectus. Vestibulum sollicitudin est est, a pretium risus rutrum ut. Curabitur imperdiet ligula et turpis rhoncus, in aliquet mauris facilisis. Ut bibendum facilisis orci sit amet tristique. Proin eleifend consectetur felis, nec ultrices dolor convallis eget.",
  "Ut suscipit erat id augue auctor, sit amet dignissim nunc feugiat. Fusce euismod nisi eros, sit amet auctor libero efficitur in. Nulla facilisi. Duis ac arcu eu arcu venenatis suscipit. Nam scelerisque mi eget tincidunt sagittis. In interdum, mauris id ultricies consectetur, elit purus suscipit libero, sed cursus libero dolor et quam. Proin ornare magna ut mi cursus, et dictum mi rhoncus. Sed convallis, nunc non ultrices scelerisque, mauris dolor sodales est, eget auctor libero tortor vel purus. Pellentesque eget laoreet velit. Curabitur a sapien feugiat, pellentesque nunc id, malesuada risus.",
  "Praesent euismod lorem non justo scelerisque, nec ullamcorper sapien suscipit. Nam sit amet neque ut nunc volutpat fermentum. Pellentesque varius ultricies urna, et fermentum urna. Nullam condimentum risus vel metus blandit, non cursus ipsum sodales. Ut ut odio ac ex dapibus dapibus in sit amet risus. Mauris a posuere sapien. Vivamus vestibulum tristique erat vel rutrum. Aliquam non sapien ligula. Duis vestibulum dictum felis, vel cursus nunc iaculis id. Curabitur vulputate lorem in nunc vulputate, sit amet luctus metus facilisis. Fusce a odio sit amet metus gravida elementum nec non ipsum.",
];

export default function Lorem() {
  const [paragraphs, setParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState(loremText[0]);
  const [copied, setCopied] = useState(false);

  const generateLorem = () => {
    let result = [];
    for (let i = 0; i < paragraphs; i++) {
      result.push(loremText[i % loremText.length]);
    }
    setGeneratedText(result.join("\n\n"));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <Helmet>
        <title>Lorem Ipsum Generator</title>
        <meta name="description" content="Generate Lorem Ipsum text for free. Choose how many paragraphs you want, click generate and it's done!" />
        <meta name="keywords" content="Lorem Ipsum, text generator, placeholder text" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/Lorem" />
      </Helmet>

      <div className="flex flex-col gap-4 p-6">
        <p className="text-gray-500">Generate Lorem Ipsum text for free. Choose how many paragraphs you want, click generate and it's done!</p>
        <div className="flex flex-col gap-4 rounded-md border-2 border-gray-200 bg-gray-50 p-6">
          <div className="flex items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <p className="text-lg">Number of paragraphs:</p>
              <input type="number" min={1} max={100} value={paragraphs} onChange={(e) => setParagraphs(Number(e.target.value))} className="rounded-md border-2 border-gray-200 bg-white p-2 py-1 caret-orange-400 outline-none focus:border-orange-400" />
            </div>
            <div className="flex items-center gap-4">
              <button onClick={handleCopy} aria-label={copied ? "Text copied!" : "Copy text"}>
                {copied ? <FaCheck fontSize={24} color="green" /> : <FaCopy fontSize={24} />}
              </button>
              <button onClick={generateLorem} className="rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600" aria-label="Generate Lorem Ipsum text">
                Generate
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg">Result :</p>
            <div className="rounded-md border-2 border-gray-200 bg-white p-4 pb-0">
              {generatedText.split("\n\n").map((para, index) => (
                <p key={index} className="mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <h3 className="mb-2 font-semibold text-gray-900">What is Lorem Ipsum?</h3>
            <p className="text-gray-600">Lorem Ipsum is a placeholder text commonly used in the graphic design, publishing, and printing industries. It helps to visualize the appearance of the final product without relying on meaningful content.</p>
          </div>
          <div className="mb-4">
            <h3 className="mb-2 font-semibold text-gray-900">Why use Lorem Ipsum?</h3>
            <p className="text-gray-600">Using Lorem Ipsum allows designers and developers to focus on the layout and design of a document or website without being distracted by the content. It helps to simulate the appearance of real text.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Can I use Lorem Ipsum for real content?</h3>
            <p className="text-gray-600">While Lorem Ipsum is useful for placeholder text, it should be replaced with actual content before publishing or printing. It’s meant to demonstrate layout and design, not to convey real information.</p>
          </div>
        </div>
      </div>
    </>
  );
}
