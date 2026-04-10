import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function Publications() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [expandedDropdowns, setExpandedDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (name: string) => {
    setExpandedDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const publications: Array<{year: number; title: string; authors: string; venue: string; links: {paper?: string; project?: string; code?: string; demo?: string}}> = [
    // 2026
    {
      year: 2026,
      title: "ChatEarthBench: Benchmarking multimodal large language models for Earth observation",
      authors: "Yuan Zhenghang, Xiong Zhitong, Dujardin Thomas, Li Xiang, Mou Lichao, Zhu Xiao Xiang",
      venue: "IEEE Geoscience and Remote Sensing Magazine, 2026",
      links: {}
    },
    {
      year: 2026,
      title: "Remote Sensing Retrieval-Augmented Generation: Bridging remote sensing imagery and comprehensive knowledge with a multimodal dataset and retrieval-augmented generation model",
      authors: "Wen Congcong, Lin Yiting, Qu Xiaokang, Li Nan, Liao Yong, Li Xiang, Lin Hui",
      venue: "IEEE Geoscience and Remote Sensing Magazine, 2026",
      links: {}
    },
    {
      year: 2026,
      title: "Confusion-Aware Spectral Regularizer for Long-Tailed Recognition",
      authors: "Zhu Ziquan, Jin Gaojie, Zhu Hanruo, Lu Si-Yuan, Zhang Yunxiao, Fu Zeyu, Mu Ronghui, Zhang Guoqiang, Sun Zhao, Yuhang Xia, Shang Jiaxing, Li Xiang, Liu Lu, Huang Tianjin",
      venue: "CVPR 2026 (Oral)",
      links: {}
    },
    {
      year: 2026,
      title: "Dual-Kernel Adapter: Expanding Spatial Horizons for Data-Constrained Medical Image Analysis",
      authors: "Zhu Ziquan, Zhu Hanruo, Lu Siyuan, Li Xiang, Meng Yanda, Jin Gaojie, Yin Lu, Hu Lijie, Wang Di, Liu Lu",
      venue: "ICLR 2026",
      links: {}
    },
    // 2025
    {
      year: 2025,
      title: "REOBench: Benchmarking Robustness of Earth Observation Foundation Models",
      authors: "Li Xiang, Tao Yong, Zhang Siyuan, Liu Siwei, Xiong Zhitong, Luo Chunbo, Liu Lu, Pechenizkiy Mykola, Zhu Xiao Xiang, Huang Tianjin",
      venue: "NeurIPS 2025 D&B track",
      links: { paper: "https://arxiv.org/pdf/2505.16793" }
    },
    {
      year: 2025,
      title: "Few-Shot Oriented Object Detection in Remote Sensing Images via Memorable Contrastive Learning",
      authors: "Zhou Jiawei, Li Wuzhou, Cao Yi, Cai Hongtao, Huang Tianjin, Xia Gui-Song, Li* Xiang",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2025",
      links: {}
    },
    {
      year: 2025,
      title: "3DCOMPAT++: An Improved Large-scale 3D Vision Dataset for Compositional Recognition",
      authors: "Slim Habib, Li Xiang, Li Yuchen, Ahmed Mahmoud, Ayman Mohamed, Upadhyay Ujjwal, Abdelreheem Ahmed, Prajapati Arpit, Pothigara Suhail, Wonka Peter",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025",
      links: {}
    },
    {
      year: 2025,
      title: "Geo-R1: Improving Few-Shot Geospatial Referring Expression Understanding with Reinforcement Fine-Tuning",
      authors: "Zhang Zilun, Guan Zian, Zhao Tiancheng, Shen Haozhan, Li Tianyu, Cai Yuxiang, Su Zhonggen, Liu Zhaojun, Yin Jianwei, Li* Xiang",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2026",
      links: {}
    },
    {
      year: 2025,
      title: "Stable-SPAM: How to Train in 4-Bit More Stably than 16-Bit Adam",
      authors: "Huang Tianjin, Hu Haotian, Zhang Zhenyu, Jin Gaojie, Li Xiang, Shen Li, Chen Tianlong, Liu Lu, Wen Qingsong, Wang Zhangyang",
      venue: "First Workshop on Scalable Optimization for Efficient and Adaptive Foundation Models, 2025",
      links: { paper: "https://arxiv.org/pdf/2502.17055" }
    },
    // 2024
    {
      year: 2024,
      title: "3DCoMPaT200: Language Grounded Large-Scale 3D Vision Dataset for Compositional Recognition",
      authors: "Ahmed Mahmoud, Li Xiang, Prajapati Arpit, Elhoseiny Mohamed",
      venue: "Advances in Neural Information Processing Systems, 2024",
      links: {}
    },
    {
      year: 2024,
      title: "Geoground: A unified large vision-language model for remote sensing visual grounding",
      authors: "Zhou Yue, Lan Mengcheng, Li Xiang, Ke Yiping, Jiang Xue, Feng Litong, Zhang Wayne",
      venue: "arXiv, 2024",
      links: { paper: "https://arxiv.org/pdf/2411.11904" }
    },
    {
      year: 2024,
      title: "Uni3DL: A Unified Model for 3D Vision-Language Understanding",
      authors: "Li Xiang, Ding Jian, Chen Zhaoyang, Elhoseiny Mohamed",
      venue: "European Conference on Computer Vision, 2024",
      links: { project: "https://uni3dl.github.io/", paper: "https://arxiv.org/abs/2312.03026" }
    },
    {
      year: 2024,
      title: "Learning to learn point signature for 3D shape geometry",
      authors: "Huang Hao, Wang Lingjing, Li Xiang, Yuan Shuaihang, Wen Congcong, Hao Yu, Fang Yi",
      venue: "Pattern Recognition Letters, 2024",
      links: {}
    },
    {
      year: 2024,
      title: "VRSBench: A Versatile Vision-Language Benchmark Dataset for Remote Sensing Image Understanding",
      authors: "Li Xiang, Ding Jian, Elhoseiny Mohamed",
      venue: "NeurIPS 2024",
      links: { project: "https://vrsbench.github.io/", paper: "https://arxiv.org/abs/2406.12384" }
    },
    {
      year: 2024,
      title: "InfRS: Incremental Few-Shot Object Detection in Remote Sensing Images",
      authors: "Li Wuzhou, Zhou Jiawei, Li Xiang, Cao Yi, Jin Guang, Zhang Xuemin",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2024",
      links: {}
    },
    {
      year: 2024,
      title: "Spatio-temporal modeling of satellite-observed CO2 columns in China using deep learning",
      authors: "He Zhonghua, Fan Gaofeng, Li Xiang, Gong Fang-Ying, Liang Miao, Gao Ling, Zhou Minqiang",
      venue: "International Journal of Applied Earth Observation and Geoinformation, 2024",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S1569843224002139" }
    },
    {
      year: 2024,
      title: "Vision-Language Models in Remote Sensing: Current Progress and Future Trends",
      authors: "Li Xiang, Wen Congcong, Hu Yuan, Yuan Zhenghang, Zhu Xiao Xiang",
      venue: "IEEE Geoscience and Remote Sensing Magazine, 2024",
      links: { paper: "https://arxiv.org/abs/2305.05726" }
    },
    {
      year: 2024,
      title: "Deep learning modeling of human activity affected wildfire risk by incorporating structural features: a case study in eastern China",
      authors: "He Zhonghua, Fan Gaofeng, Li Zhengquan, Li Shaohong, Gao Ling, Li Xiang, Zeng Zhao-Cheng",
      venue: "Ecological Indicators, 2024",
      links: {}
    },
    // 2023
    {
      year: 2023,
      title: "MiniGPT-v2: large language model as a unified interface for vision-language multi-task learning",
      authors: "Chen Jun, Zhu Deyao, Shen Xiaoqian, Li Xiang, Liu Zechun, Zhang Pengchuan, Krishnamoorthi Raghuraman, Chandra Vikas, Xiong Yunyang, Elhoseiny Mohamed",
      venue: "2nd MMFM Workshop in CVPR2024",
      links: { project: "https://minigpt-4.github.io/", paper: "https://arxiv.org/abs/2310.09478", code: "https://github.com/Vision-CAIR/MiniGPT-4" }
    },
    {
      year: 2023,
      title: "Video chatcaptioner: Towards enriched spatiotemporal descriptions",
      authors: "Chen Jun, Zhu Deyao, Haydarov Kilichbek, Li Xiang, Elhoseiny Mohamed",
      venue: "arXiv, 2023",
      links: { paper: "https://arxiv.org/abs/2304.04227" }
    },
    {
      year: 2023,
      title: "FishNet: A Large-scale Dataset and Benchmark for Fish Recognition, Detection, and Functional Trait Prediction",
      authors: "Khan# Faizan Farooq, Li# Xiang, Temple Andrew J, Elhoseiny Mohamed",
      venue: "International Conference on Computer Vision, 2023",
      links: { paper: "https://openaccess.thecvf.com/content/ICCV2023/html/Khan_FishNet_A_Large-scale_Dataset_and_Benchmark_for_Fish_Recognition_Detection_ICCV_2023_paper.html", code: "https://github.com/faixan-khan/FishNet" }
    },
    {
      year: 2023,
      title: "RS-CLIP: Zero shot remote sensing scene classification via contrastive vision-language supervision",
      authors: "Li Xiang, Wen Congcong, Hu Yuan, Zhou Nan",
      venue: "International Journal of Applied Earth Observation and Geoinformation, 2023",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S1569843223003217", code: "https://github.com/lx709/RS-CLIP" }
    },
    {
      year: 2023,
      title: "Few-shot object detection on aerial imagery via deep metric learning and knowledge inheritance",
      authors: "Li Wu-zhou, Zhou Jia-wei, Li Xiang, Cao Yi, Jin Guang",
      venue: "International Journal of Applied Earth Observation and Geoinformation, 2023",
      links: {}
    },
    {
      year: 2023,
      title: "3D shape contrastive representation learning with adversarial examples",
      authors: "Wen Congcong, Li Xiang, Huang Hao, Liu Yu-Shen, Fang Yi",
      venue: "IEEE Transactions on Multimedia, 2023",
      links: { paper: "https://ieeexplore.ieee.org/iel7/6046/4456689/10094000.pdf" }
    },
    {
      year: 2023,
      title: "MostGAN-V: Video generation with temporal motion styles",
      authors: "Shen Xiaoqian, Li Xiang, Elhoseiny Mohamed",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition, 2023",
      links: { paper: "https://arxiv.org/abs/2304.02777", code: "https://github.com/xiaoqian-shen/MoStGAN-V" }
    },
    {
      year: 2023,
      title: "MiniGPT-4: Enhancing vision-language understanding with advanced large language models",
      authors: "Zhu Deyao, Chen Jun, Shen Xiaoqian, Li Xiang, Elhoseiny Mohamed",
      venue: "International Conference on Learning Representations 2024",
      links: { project: "https://minigpt-4.github.io/", paper: "https://arxiv.org/abs/2304.10592", code: "https://github.com/Vision-CAIR/MiniGPT-4" }
    },
    // 2022
    {
      year: 2022,
      title: "GP-Aligner: Unsupervised Groupwise Nonrigid Point Set Registration Based on Optimizable Group Latent Descriptor",
      authors: "Wang Lingjing, Zhou Nan, Huang Hao, Wang Jifei, Li* Xiang, Fang Yi",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2022",
      links: { paper: "https://ieeexplore.ieee.org/document/9994035" }
    },
    {
      year: 2022,
      title: "Unsupervised 3D Shape Representation Learning Using Normalizing Flow",
      authors: "Li Xiang, Wen Congcong, Huang Hao",
      venue: "Asian Conference on Computer Vision, 2022",
      links: {}
    },
    {
      year: 2022,
      title: "Meta-Det3D: Learn to Learn Few-Shot 3D Object Detection",
      authors: "Yuan# Shuaihang, Li# Xiang, Huang Hao, Fang Yi",
      venue: "Asian Conference on Computer Vision, 2022",
      links: { paper: "https://openaccess.thecvf.com/content/ACCV2022/papers/Yuan_Meta-Det3D_Learn_to_Learn_Few-Shot_3D_Object_Detection_ACCV_2022_paper.pdf" }
    },
    {
      year: 2022,
      title: "Few-Shot Segmentation of Remote Sensing Images Using Deep Metric Learning",
      authors: "Jiang Xufeng, Zhou Nan, Li* Xiang",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2022",
      links: { paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9721235&tag=1" }
    },
    {
      year: 2022,
      title: "Unsupervised category-specific partial point set registration via joint shape completion and registration",
      authors: "Li Xiang, Wang Lingjing, Fang Yi",
      venue: "IEEE Transactions on Visualization and Computer Graphics, 2022",
      links: {}
    },
    // 2021
    {
      year: 2021,
      title: "3D-MetaConNet: Meta-learning for 3D shape classification and segmentation",
      authors: "Huang Hao, Li Xiang, Wang Lingjing, Fang Yi",
      venue: "International Conference on 3D Vision, 2021",
      links: { paper: "https://www.computer.org/csdl/proceedings-article/3dv/2021/268800a982/1zWEpWr3tZK" }
    },
    {
      year: 2021,
      title: "Few-shot object detection on remote sensing images",
      authors: "Li# Xiang, Deng# Jingyu, Fang Yi",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2021",
      links: { paper: "https://ieeexplore.ieee.org/document/9362267" }
    },
    {
      year: 2021,
      title: "Geometry-aware segmentation of remote sensing images via joint height estimation",
      authors: "Li Xiang, Wen Congcong, Wang Lingjing, Fang Yi",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2021",
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/9361998" }
    },
    {
      year: 2021,
      title: "Airborne LiDAR point cloud classification with global-local graph attention convolution neural network",
      authors: "Wen Congcong, Li Xiang, Yao Xiaojing, Peng Ling, Chi Tianhe",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2021",
      links: {}
    },
    {
      year: 2021,
      title: "Learn to learn metric space for few-shot segmentation of 3D shapes",
      authors: "Li Xiang, Wang Lingjing, Fang Yi",
      venue: "arXiv, 2021",
      links: { paper: "https://arxiv.org/abs/2107.02972" }
    },
    // 2020
    {
      year: 2020,
      title: "Geo-parcel-based change detection using optical and SAR images in cloudy and rainy areas",
      authors: "Zhou# Nan, Li# Xiang, Shen Zhanfeng, Wu Tianjun, Luo Jiancheng",
      venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2020",
      links: { paper: "https://ieeexplore.ieee.org/document/9261102" }
    },
    {
      year: 2020,
      title: "Road Extraction From Remote Sensing Images in Wildland-Urban Interface Areas",
      authors: "Chen# Ruonan, Li# Xiang, Hu Yuan, Wen Congcong, Peng Ling",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2020",
      links: {}
    },
    {
      year: 2020,
      title: "Height estimation from single aerial images using a deep ordinal regression network",
      authors: "Li Xiang, Wang Mingyang, Fang Yi",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2020",
      links: { paper: "https://ieeexplore.ieee.org/document/9190011/" }
    },
    {
      year: 2020,
      title: "Robust image matching by dynamic feature selection",
      authors: "Huang Hao, Chen Jianchun, Li Xiang, Wang Lingjing, Fang Yi",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2008.05708" }
    },
    {
      year: 2020,
      title: "3DMotion-Net: Learning continuous flow function for 3D motion prediction",
      authors: "Yuan# Shuaihang, Li# Xiang, Tzes Anthony, Fang Yi",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems, 2020",
      links: { paper: "http://ras.papercept.net/images/temp/IROS/files/2297.pdf" }
    },
    {
      year: 2020,
      title: "DANCE-NET: Density-aware convolution networks with context encoding for airborne LiDAR point cloud classification",
      authors: "Li Xiang, Wang Lingjing, Wang Mingyang, Wen Congcong, Fang Yi",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2020",
      links: { paper: "https://arxiv.org/abs/1910.05909", code: "https://github.com/lx709/DANCE-NET" }
    },
    {
      year: 2020,
      title: "Unsupervised learning of global registration of temporal sequence of point clouds",
      authors: "Wang Lingjing, Shi Yi, Li Xiang, Fang Yi",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2006.12378" }
    },
    {
      year: 2020,
      title: "Unsupervised learning of 3D point set registration",
      authors: "Wang Lingjing, Li Xiang, Fang Yi",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2006.06200" }
    },
    {
      year: 2020,
      title: "3D Meta-Registration: Learning to learn registration of 3D point clouds",
      authors: "Wang Lingjing, Hao Yu, Li Xiang, Fang Yi",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2010.11504" }
    },
    {
      year: 2020,
      title: "Deep-3DAligner: Unsupervised 3D point set registration network with optimizable latent vector",
      authors: "Wang Lingjing, Li Xiang, Fang Yi",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2010.00321" }
    },
    {
      year: 2020,
      title: "Topology constrained shape correspondence",
      authors: "Li# Xiang, Wen# Congcong, Wang Lingjing, Fang Yi",
      venue: "IEEE Transactions on Visualization and Computer Graphics, 2020",
      links: { paper: "https://ieeexplore.ieee.org/document/9091324", code: "https://github.com/lixiang-ucas/TP-Net" }
    },
    {
      year: 2020,
      title: "Few-shot learning of part-specific probability space for 3D shape segmentation",
      authors: "Wang# Lingjing, Li# Xiang, Fang Yi",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition, 2020",
      links: {}
    },
    {
      year: 2020,
      title: "Directionally constrained fully convolutional neural network for airborne LiDAR point cloud classification",
      authors: "Wen Congcong, Yang Lina, Li* Xiang, Peng Ling, Chi Tianhe",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2020",
      links: {}
    },
    // 2019
    {
      year: 2019,
      title: "PC-Net: Unsupervised point correspondence learning with neural networks",
      authors: "Li Xiang, Wang Lingjing, Fang Yi",
      venue: "International Conference on 3D Vision, 2019",
      links: { paper: "https://www.ijcai.org/proceedings/2019/0399.pdf" }
    },
    {
      year: 2019,
      title: "Cross-Safe: A computer vision-based approach to make all intersection-related pedestrian signals accessible for the visually impaired",
      authors: "Li Xiang, Cui Hanzhang, Rizzo John-Ross, Wong Edward, Fang Yi",
      venue: "Science and Information Conference, 2019",
      links: { paper: "https://link.springer.com/chapter/10.1007/978-3-030-17798-0_13" }
    },
    {
      year: 2019,
      title: "A novel spatiotemporal convolutional long short-term neural network for air pollution prediction",
      authors: "Wen Congcong, Liu Shufu, Yao Xiaojing, Peng Ling, Li Xiang, Hu Yuan, Chi Tianhe",
      venue: "Science of the Total Environment, 2019",
      links: { paper: "https://arxiv.org/abs/1908.06673" }
    },
    {
      year: 2019,
      title: "A sample update-based convolutional neural network framework for object detection in large-area remote sensing images",
      authors: "Hu Yuan, Li Xiang, Zhou Nan, Yang Lina, Peng Ling, Xiao Sha",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2019",
      links: { paper: "https://ieeexplore.ieee.org/document/8613920/" }
    },
    {
      year: 2019,
      title: "Arbicon-Net: Arbitrary continuous geometric transformation networks for image registration",
      authors: "Chen Jianchun, Wang Lingjing, Li Xiang, Fang Yi",
      venue: "Advances in Neural Information Processing Systems, 2019",
      links: { paper: "https://arxiv.org/abs/1908.06673", code: "https://github.com/nyummvc/Arbicon-Net" }
    },
    {
      year: 2019,
      title: "Dynamic feature fusion for semantic edge detection",
      authors: "Hu Yuan, Chen Yunpeng, Li Xiang, Feng Jiashi",
      venue: "International Joint Conference on Artificial Intelligence, 2019",
      links: { paper: "https://arxiv.org/abs/1902.09104" }
    },
    {
      year: 2019,
      title: "Coherent point drift networks: Unsupervised learning of non-rigid point set registration",
      authors: "Wang Lingjing, Li Xiang, Chen Jianchun, Fang Yi",
      venue: "arXiv, 2019",
      links: { paper: "https://arxiv.org/abs/1906.03039" }
    },
    {
      year: 2019,
      title: "Non-rigid point set registration networks",
      authors: "Wang Lingjing, Chen Jianchun, Li Xiang, Fang Yi",
      venue: "arXiv, 2019",
      links: { paper: "https://arxiv.org/abs/1904.01428" }
    },
    {
      year: 2019,
      title: "Short-term traffic forecast of urban bus stations based on long short-term memory",
      authors: "Li Gao-sheng, Peng Ling, Li Xiang, Wu Tong",
      venue: "Journal of Highway and Transportation Research and Development, 2019",
      links: {}
    },
    // 2018
    {
      year: 2018,
      title: "Building-A-Nets: Robust building extraction from high-resolution remote sensing images with adversarial networks",
      authors: "Li Xiang, Yao Xiaojing, Fang Yi",
      venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2018",
      links: { paper: "https://arxiv.org/abs/1910.05909", code: "https://ieeexplore.ieee.org/document/8453267" }
    },
    {
      year: 2018,
      title: "A novel evolution tree for analyzing the global energy consumption structure",
      authors: "Hu Yuan, Peng Ling, Li Xiang, Yao Xiaojing, Lin Hui, Chi Tianhe",
      venue: "Energy, 2018",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S0360544218301117" }
    },
    // 2017
    {
      year: 2017,
      title: "Long short-term memory neural network for air pollutant concentration predictions: Method development and evaluation",
      authors: "Li Xiang, Peng Ling, Yao Xiaojing, Cui Shaolong, Hu Yuan, You Chengzeng, Chi Tianhe",
      venue: "Environmental Pollution, 2017",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S0269749117307534" }
    },
    {
      year: 2017,
      title: "Dynamic monitoring of the largest freshwater lake in China using a new water index derived from high spatiotemporal resolution Sentinel-1A data",
      authors: "Tian Haifeng, Li Wang, Wu Mingquan, Huang Ni, Li Guodong, Li Xiang, Niu Zheng",
      venue: "Remote Sensing, 2017",
      links: { paper: "https://www.mdpi.com/2072-4292/9/6/521" }
    },
    // 2016
    {
      year: 2016,
      title: "Deep learning architecture for air quality predictions",
      authors: "Li Xiang, Peng Ling, Hu Yuan, Shao Jing, Chi Tianhe",
      venue: "Environmental Science and Pollution Research, 2016",
      links: { paper: "https://link.springer.com/article/10.1007/s11356-016-7812-9" }
    },
  ];

  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);

  const filteredPublications = selectedYear
    ? publications.filter(p => p.year === parseInt(selectedYear))
    : publications;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-900 text-white z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex gap-8">
          <Link href="/" className="font-semibold hover:text-gray-300">HOME</Link>
          <Link href="/publications" className="font-semibold hover:text-gray-300">PUBLICATIONS</Link>
          <Link href="/teaching" className="font-semibold hover:text-gray-300">TEACHING</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-lg text-gray-700">Complete list of publications and research outputs</p>
        </section>

        {/* Year Filter Buttons */}
        <section className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-4 py-2 rounded font-semibold transition ${
              selectedYear === null
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            ALL
          </button>
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year.toString())}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedYear === year.toString()
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {year}
            </button>
          ))}
        </section>

        {/* Publications List */}
        <section className="space-y-8">
          {filteredPublications.length === 0 ? (
            <p className="text-gray-600">No publications found for the selected year.</p>
          ) : (
            filteredPublications.map((pub, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">{pub.title}</h3>
                  <span className="text-sm font-semibold text-gray-500 ml-4 whitespace-nowrap">{pub.year}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                {pub.venue && <p className="text-sm text-blue-600 font-semibold mb-3">{pub.venue}</p>}
                
                {/* Links */}
                {Object.keys(pub.links).length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {pub.links.paper && (
                      <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">
                        PDF
                      </a>
                    )}
                    {pub.links.project && (
                      <a href={pub.links.project} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">
                        Project
                      </a>
                    )}
                    {pub.links.code && (
                      <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">
                        Code
                      </a>
                    )}
                    {pub.links.demo !== undefined && (
                      <a href={pub.links.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}
