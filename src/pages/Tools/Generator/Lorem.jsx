import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

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
  "Mauris eu lobortis justo. Proin ipsum eros, aliquam et condimentum eget, eleifend non felis. Vivamus venenatis elit non magna posuere consequat. Pellentesque molestie diam quis rutrum iaculis. Cras mollis pellentesque leo nec rhoncus. Nulla varius faucibus magna. Phasellus rutrum sem in pharetra scelerisque. Curabitur fringilla feugiat turpis. Integer tempor ipsum vel nisi sodales aliquam. Nulla volutpat eget felis et posuere. Nullam eget accumsan nunc. Nam sodales, nunc sit amet vehicula volutpat, lectus augue vestibulum ante, sit amet luctus nisi enim at sapien.",
  "Vestibulum scelerisque sem in mi tincidunt, id posuere odio laoreet. Phasellus suscipit sem ut nisi ullamcorper dignissim. Donec bibendum ultricies odio vel gravida. Aliquam iaculis nisl nec sapien egestas, non ultrices libero tincidunt. Quisque nec nisi elit. Etiam viverra mi vel consectetur euismod. Duis ac lacus nisi. Quisque sed quam in ante pharetra dapibus id ac mi. Aliquam maximus ipsum eros, nec auctor felis fringilla at. Mauris ac dictum ante.",
  "Nullam posuere diam vitae risus posuere, in lacinia est ultricies. Vivamus a ex metus. Vestibulum non ante tortor. In sed elit vitae eros gravida vehicula. Sed id purus felis. Pellentesque ut nunc a turpis laoreet scelerisque. Donec sed nulla at lorem hendrerit convallis. Cras dignissim congue nisi, sit amet volutpat ex dapibus a. Sed interdum egestas erat, ac posuere odio convallis ac.",
  "Pellentesque in dolor ut eros fringilla tempus. Duis et eros vitae ante ullamcorper malesuada. Sed sed fringilla est, id suscipit quam. Nunc scelerisque erat vel nisi tempor, a vestibulum velit ullamcorper. Nullam sit amet feugiat ex. Donec vel rutrum arcu. Ut sit amet nibh tellus. Quisque sit amet posuere neque, vitae viverra lacus.",
  "Suspendisse ultricies, ligula non tristique scelerisque, tortor ligula tincidunt arcu, vel vestibulum tortor enim eget risus. Quisque nec felis non tortor consectetur tincidunt. Phasellus gravida nec metus non elementum. Pellentesque vel metus lacus. Aenean dignissim vel libero ut dignissim. Aliquam porttitor dolor risus, in interdum ante finibus non. Sed vel varius ligula. Nullam laoreet ornare suscipit. Donec viverra felis arcu, sit amet porttitor mi tincidunt a.",
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
    setTimeout(() => setCopied(false), 1000); // Revenir à l'icône de copie après 2 secondes
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <p className="text-gray-500">Generate Lorem Ipsum text for free. Choose how many paragraphs you want, click generate and it's done!</p>
      </div>
      <div className="flex items-center justify-between rounded-md border-2 border-gray-200 p-4">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg">Number of paragraphs :</p>
            <input type="number" min={1} max={100} value={paragraphs} onChange={(e) => setParagraphs(Number(e.target.value))} className="rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none focus:border-orange-400 focus:outline-offset-0" />
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleCopy}>
              {copied ? <FaCheck fontSize={24} color="green" /> : <FaCopy fontSize={24} />}
            </button>
            <button onClick={generateLorem} className="rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600">
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-md border-2 border-gray-200 p-4 pb-0">
        {generatedText.split("\n\n").map((para, index) => (
          <p key={index} className="mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
