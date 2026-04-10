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
      authors: "Zhenghang Yuan, Zhitong Xiong, Thomas Dujardin, Xiang Li, Lichao Mou, Xiao Xiang Zhu",
      venue: "IEEE Geoscience and Remote Sensing Magazine, 2026",
      links: {code: "https://github.com/YZHJessica/chatearthbench"}
    },
    {
      year: 2026,
      title: "Remote Sensing Retrieval-Augmented Generation: Bridging remote sensing imagery and comprehensive knowledge with a multimodal dataset and retrieval-augmented generation model",
      authors: "Congcong Wen, Yiting Lin, Xiaokang Qu, Nan Li, Yong Liao, Xiang Li, Hui Lin",
      venue: "IEEE Geoscience and Remote Sensing Magazine, 2026",
      links: {code: "https://github.com/CongcongWen1208/RS-RAG", paper: "https://arxiv.org/abs/2504.04988"}
    },
    {
      year: 2026,
      title: "Confusion-Aware Spectral Regularizer for Long-Tailed Recognition",
      authors: "Ziquan Zhu, Gaojie Jin, Hanruo Zhu, Si-Yuan Lu, Yunxiao Zhang, Zeyu Fu, Ronghui Mu, Guoqiang Zhang, Zhao Sun, Yuhang Xia, Jiaxing Shang, Xiang Li, Lu Liu, Tianjin Huang",
      venue: "CVPR 2026 (Oral)",
      links: {paper: "https://arxiv.org/abs/2603.16732"}
    },
    {
      year: 2026,
      title: "Dual-Kernel Adapter: Expanding Spatial Horizons for Data-Constrained Medical Image Analysis",
      authors: "Ziquan Zhu, Hanruo Zhu, Siyuan Lu, Xiang Li, Yanda Meng, Gaojie Jin, Lu Yin, Lijie Hu, Di Wang, Lu Liu",
      venue: "ICLR 2026",
      links: {paper: "https://arxiv.org/abs/2602.18888"}
    },

    // 2025
    {
      year: 2025,
      title: "REOBench: Benchmarking Robustness of Earth Observation Foundation Models",
      authors: "Xiang Li, Yong Tao, Siyuan Zhang, Siwei Liu, Zhitong Xiong, Chunbo Luo, Lu Liu, Mykola Pechenizkiy, Xiao Xiang Zhu, Tianjin Huang",
      venue: "NeurIPS 2025 D&B track",
      links: {code: "https://github.com/lx709/reobench", paper: "https://arxiv.org/pdf/2505.16793" }
    },
    {
      year: 2025,
      title: "Few-Shot Oriented Object Detection in Remote Sensing Images via Memorable Contrastive Learning",
      authors: "Jiawei Zhou, Wuzhou Li, Yi Cao, Hongtao Cai, Tianjin Huang, Gui-Song Xia, Xiang Li",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2025",
      links: {code: "https://github.com/BriFuture/fomcd", paper: "https://arxiv.org/abs/2403.13375" }
    },
    {
      year: 2025,
      title: "3DCOMPAT++: An Improved Large-scale 3D Vision Dataset for Compositional Recognition",
      authors: "Habib Slim, Xiang Li, Yuchen Li, Mahmoud Ahmed, Mohamed Ayman, Ujjwal Upadhyay, Ahmed Abdelreheem, Arpit Prajapati, Suhail Pothigara, Peter Wonka",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025",
      links: {code: "https://3dcompat-dataset.org/v2/", paper: "https://arxiv.org/abs/2310.18511" }
    },
    {
      year: 2025,
      title: "Geo-R1: Improving Few-Shot Geospatial Referring Expression Understanding with Reinforcement Fine-Tuning",
      authors: "Zilun Zhang, Zian Guan, Tiancheng Zhao, Haozhan Shen, Tianyu Li, Yuxiang Cai, Zhonggen Su, Zhaojun Liu, Jianwei Yin, Xiang Li",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2026",
      links: {code: "https://geo-r1.github.io/", paper: "https://arxiv.org/abs/2509.21976" }
    },
    {
      year: 2025,
      title: "GradientStabilizer: Fix the Norm, Not the Gradient",
      authors: "Tianjin Huang, Haotian Hu, Zhenyu Zhang, Gaojie Jin, Xiang Li, Li Shen, Tianlong Chen, Lu Liu, Qingsong Wen, Zhangyang Wang",
      venue: "Workshop on Scalable Optimization for Efficient and Adaptive Foundation Models, 2025",
      links: {paper: "https://arxiv.org/pdf/2502.17055" }
    },
    // 2024
    {
      year: 2024,
      title: "3DCoMPaT200: Language Grounded Large-Scale 3D Vision Dataset for Compositional Recognition",
      authors: "Mahmoud Ahmed, Xiang Li, Arpit Prajapati, Mohamed Elhoseiny",
      venue: "Advances in Neural Information Processing Systems, 2024",
      links: {paper: "https://arxiv.org/abs/2501.06785", code: "https://github.com/3DCoMPaT200/3DCoMPaT200" }
    },
    {
      year: 2024,
      title: "Geoground: A unified large vision-language model for remote sensing visual grounding",
      authors: "Yue Zhou, Mengcheng Lan, Xiang Li, Yiping Ke, Xue Jiang, Litong Feng, Wayne Zhang",
      venue: "arXiv, 2024",
      links: { paper: "https://arxiv.org/pdf/2411.11904", code: "https://github.com/VisionXLab/GeoGround" }
    },
    {
      year: 2024,
      title: "Uni3DL: A Unified Model for 3D Vision-Language Understanding",
      authors: "Xiang Li, Jian Ding, Zhaoyang Chen, Mohamed Elhoseiny",
      venue: "European Conference on Computer Vision, 2024",
      links: { project: "https://uni3dl.github.io/", paper: "https://arxiv.org/abs/2312.03026" }
    },
    {
      year: 2024,
      title: "Learning to learn point signature for 3D shape geometry",
      authors: "Hao Huang, Lingjing Wang, Xiang Li, Shuaihang Yuan, Congcong Wen, Yu Hao, Yi Fang",
      venue: "Pattern Recognition Letters, 2024",
      links: {paper: "https://www.sciencedirect.com/science/article/abs/pii/S0167865524001922" }
    },
    {
      year: 2024,
      title: "VRSBench: A Versatile Vision-Language Benchmark Dataset for Remote Sensing Image Understanding",
      authors: "Xiang Li, Jian Ding, Mohamed Elhoseiny",
      venue: "NeurIPS 2024",
      links: {code: "https://vrsbench.github.io/", paper: "https://arxiv.org/abs/2406.12384" }
    },
    {
      year: 2024,
      title: "InfRS: Incremental Few-Shot Object Detection in Remote Sensing Images",
      authors: "Wuzhou Li, Jiawei Zhou, Xiang Li, Yi Cao, Guang Jin, Xuemin Zhang",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2024",
      links: {paper: "https://arxiv.org/abs/2405.11293" }
    },
    {
      year: 2024,
      title: "Spatio-temporal modeling of satellite-observed CO2 columns in China using deep learning",
      authors: "Zhonghua He, Gaofeng Fan, Xiang Li, Fang-Ying Gong, Miao Liang, Ling Gao, Minqiang Zhou",
      venue: "International Journal of Applied Earth Observation and Geoinformation, 2024",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S1569843224002139" }
    },
    {
      year: 2024,
      title: "Vision-Language Models in Remote Sensing: Current Progress and Future Trends",
      authors: "Xiang Li, Congcong Wen, Yuan Hu, Zhenghang Yuan, Xiao Xiang Zhu",
      venue: "IEEE Geoscience and Remote Sensing Magazine, 2024",
      links: { paper: "https://arxiv.org/abs/2305.05726" }
    },
    {
      year: 2024,
      title: "Deep learning modeling of human activity affected wildfire risk by incorporating structural features: a case study in eastern China",
      authors: "Zhonghua He, Gaofeng Fan, Zhengquan Li, Shaohong Li, Ling Gao, Xiang Li, Zhao-Cheng Zeng",
      venue: "Ecological Indicators, 2024",
      links: {}
    },

    // 2023
    {
      year: 2023,
      title: "MiniGPT-v2: large language model as a unified interface for vision-language multi-task learning",
      authors: "Jun Chen, Deyao Zhu, Xiaoqian Shen, Xiang Li, Zechun Liu, Pengchuan Zhang, Raghuraman Krishnamoorthi, Vikas Chandra, Yunyang Xiong, Mohamed Elhoseiny",
      venue: "2nd MMFM Workshop in CVPR2024",
      links: { project: "https://minigpt-4.github.io/", paper: "https://arxiv.org/abs/2310.09478", code: "https://github.com/Vision-CAIR/MiniGPT-4" }
    },
    {
      year: 2023,
      title: "Video chatcaptioner: Towards enriched spatiotemporal descriptions",
      authors: "Jun Chen, Deyao Zhu, Kilichbek Haydarov, Xiang Li, Mohamed Elhoseiny",
      venue: "arXiv, 2023",
      links: { paper: "https://arxiv.org/abs/2304.04227" }
    },
    {
      year: 2023,
      title: "FishNet: A Large-scale Dataset and Benchmark for Fish Recognition, Detection, and Functional Trait Prediction",
      authors: "Faizan Farooq Khan#, Xiang Li#, Andrew J Temple, Mohamed Elhoseiny",
      venue: "International Conference on Computer Vision, 2023",
      links: { paper: "https://openaccess.thecvf.com/content/ICCV2023/html/Khan_FishNet_A_Large-scale_Dataset_and_Benchmark_for_Fish_Recognition_Detection_ICCV_2023_paper.html", code: "https://github.com/faixan-khan/FishNet" }
    },
    {
      year: 2023,
      title: "RS-CLIP: Zero shot remote sensing scene classification via contrastive vision-language supervision",
      authors: "Xiang Li, Congcong Wen, Yuan Hu, Nan Zhou",
      venue: "International Journal of Applied Earth Observation and Geoinformation, 2023",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S1569843223003217", code: "https://github.com/lx709/RS-CLIP" }
    },
    {
      year: 2023,
      title: "Few-shot object detection on aerial imagery via deep metric learning and knowledge inheritance",
      authors: "Wuzhou Li, Jiawei Zhou, Xiang Li, Yi Cao, Guang Jin",
      venue: "International Journal of Applied Earth Observation and Geoinformation, 2023",
      links: {paper: "https://www.sciencedirect.com/science/article/pii/S1569843223002212" }
    },
    {
      year: 2023,
      title: "3D shape contrastive representation learning with adversarial examples",
      authors: "Congcong Wen, Xiang Li, Hao Huang, Yu-Shen Liu, Yi Fang",
      venue: "IEEE Transactions on Multimedia, 2023",
      links: { paper: "https://ieeexplore.ieee.org/iel7/6046/4456689/10094000.pdf" }
    },
    {
      year: 2023,
      title: "MostGAN-V: Video generation with temporal motion styles",
      authors: "Xiaoqian Shen, Xiang Li, Mohamed Elhoseiny",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition, 2023",
      links: { paper: "https://arxiv.org/abs/2304.02777", code: "https://github.com/xiaoqian-shen/MoStGAN-V" }
    },
    {
      year: 2023,
      title: "MiniGPT-4: Enhancing vision-language understanding with advanced large language models",
      authors: "Deyao Zhu, Jun Chen, Xiaoqian Shen, Xiang Li, Mohamed Elhoseiny",
      venue: "International Conference on Learning Representations 2024",
      links: { project: "https://minigpt-4.github.io/", paper: "https://arxiv.org/abs/2304.10592", code: "https://github.com/Vision-CAIR/MiniGPT-4" }
    },

    // 2022
    {
      year: 2022,
      title: "GP-Aligner: Unsupervised Groupwise Nonrigid Point Set Registration Based on Optimizable Group Latent Descriptor",
      authors: "Lingjing Wang, Nan Zhou, Hao Huang, Jifei Wang, Xiang Li*, Yi Fang",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2022",
      links: { paper: "https://ieeexplore.ieee.org/document/9994035" }
    },
    {
      year: 2022,
      title: "Unsupervised 3D Shape Representation Learning Using Normalizing Flow",
      authors: "Xiang Li, Congcong Wen, Hao Huang",
      venue: "Asian Conference on Computer Vision, 2022",
      links: {paper: "https://openaccess.thecvf.com/content/ACCV2022/papers/Li_Unsupervised_3D_Shape_Representation_Learning_using_Normalizing_Flow_ACCV_2022_paper.pdf" }
    },
    {
      year: 2022,
      title: "Meta-Det3D: Learn to Learn Few-Shot 3D Object Detection",
      authors: "Shuaihang Yuan#, Xiang Li#, Hao Huang, Yi Fang",
      venue: "Asian Conference on Computer Vision, 2022",
      links: { paper: "https://openaccess.thecvf.com/content/ACCV2022/papers/Yuan_Meta-Det3D_Learn_to_Learn_Few-Shot_3D_Object_Detection_ACCV_2022_paper.pdf" }
    },
    {
      year: 2022,
      title: "Few-Shot Segmentation of Remote Sensing Images Using Deep Metric Learning",
      authors: "Xufeng Jiang, Nan Zhou, Xiang Li*",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2022",
      links: { paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9721235&tag=1" }
    },
    {
      year: 2022,
      title: "Unsupervised category-specific partial point set registration via joint shape completion and registration",
      authors: "Xiang Li, Lingjing Wang, Yi Fang",
      venue: "IEEE Transactions on Visualization and Computer Graphics, 2022",
      links: {paper : "https://ieeexplore.ieee.org/document/9729524"}
    },

    // 2021
    {
      year: 2021,
      title: "3D-MetaConNet: Meta-learning for 3D shape classification and segmentation",
      authors: "Hao Huang, Xiang Li, Lingjing Wang, Yi Fang",
      venue: "International Conference on 3D Vision, 2021",
      links: { paper: "https://www.computer.org/csdl/proceedings-article/3dv/2021/268800a982/1zWEpWr3tZK" }
    },
    {
      year: 2021,
      title: "Few-shot object detection on remote sensing images",
      authors: "Xiang Li#, Jingyu Deng#, Yi Fang",
      venue: "IEEE Transactions on Geoscience and Remote Sensing, 2021",
      links: { paper: "https://ieeexplore.ieee.org/document/9362267" }
    },
    {
      year: 2021,
      title: "Geometry-aware segmentation of remote sensing images via joint height estimation",
      authors: "Xiang Li, Congcong Wen, Lingjing Wang, Yi Fang",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2021",
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/9361998" }
    },
    {
      year: 2021,
      title: "Airborne LiDAR point cloud classification with global-local graph attention convolution neural network",
      authors: "Congcong Wen, Xiang Li, Xiaojing Yao, Ling Peng, Tianhe Chi",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2021",
      links: {}
    },
    {
      year: 2021,
      title: "Learn to learn metric space for few-shot segmentation of 3D shapes",
      authors: "Xiang Li, Lingjing Wang, Yi Fang",
      venue: "arXiv, 2021",
      links: { paper: "https://arxiv.org/abs/2107.02972" }
    },

    // 2020
    {
      year: 2020,
      title: "Geo-parcel-based change detection using optical and SAR images in cloudy and rainy areas",
      authors: "Nan Zhou#, Xiang Li#, Zhanfeng Shen, Tianjun Wu, Jiancheng Luo",
      venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2020",
      links: { paper: "https://ieeexplore.ieee.org/document/9261102" }
    },
    {
      year: 2020,
      title: "Road Extraction From Remote Sensing Images in Wildland-Urban Interface Areas",
      authors: "Ruonan Chen#, Xiang Li#, Yuan Hu, Congcong Wen, Ling Peng",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2020",
      links: {}
    },
    {
      year: 2020,
      title: "Height estimation from single aerial images using a deep ordinal regression network",
      authors: "Xiang Li, Mingyang Wang, Yi Fang",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2020",
      links: { paper: "https://ieeexplore.ieee.org/document/9190011/" }
    },
    {
      year: 2020,
      title: "Robust image matching by dynamic feature selection",
      authors: "Hao Huang, Jianchun Chen, Xiang Li, Lingjing Wang, Yi Fang",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2008.05708" }
    },
    {
      year: 2020,
      title: "3DMotion-Net: Learning continuous flow function for 3D motion prediction",
      authors: "Shuaihang Yuan#, Xiang Li#, Anthony Tzes, Yi Fang",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems, 2020",
      links: { paper: "http://ras.papercept.net/images/temp/IROS/files/2297.pdf" }
    },
    {
      year: 2020,
      title: "DANCE-NET: Density-aware convolution networks with context encoding for airborne LiDAR point cloud classification",
      authors: "Xiang Li, Lingjing Wang, Mingyang Wang, Congcong Wen, Yi Fang",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2020",
      links: { paper: "https://arxiv.org/abs/1910.05909", code: "https://github.com/lx709/DANCE-NET" }
    },
    {
      year: 2020,
      title: "Unsupervised learning of global registration of temporal sequence of point clouds",
      authors: "Lingjing Wang, Yi Shi, Xiang Li, Yi Fang",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2006.12378" }
    },
    {
      year: 2020,
      title: "Unsupervised learning of 3D point set registration",
      authors: "Lingjing Wang, Xiang Li, Yi Fang",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2006.06200" }
    },
    {
      year: 2020,
      title: "3D Meta-Registration: Learning to learn registration of 3D point clouds",
      authors: "Lingjing Wang, Yu Hao, Xiang Li, Yi Fang",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2010.11504" }
    },
    {
      year: 2020,
      title: "Deep-3DAligner: Unsupervised 3D point set registration network with optimizable latent vector",
      authors: "Lingjing Wang, Xiang Li, Yi Fang",
      venue: "arXiv, 2020",
      links: { paper: "https://arxiv.org/abs/2010.00321" }
    },
    {
      year: 2020,
      title: "Topology constrained shape correspondence",
      authors: "Xiang Li#, Congcong Wen#, Lingjing Wang, Yi Fang",
      venue: "IEEE Transactions on Visualization and Computer Graphics, 2020",
      links: { paper: "https://ieeexplore.ieee.org/document/9091324", code: "https://github.com/lixiang-ucas/TP-Net" }
    },
    {
      year: 2020,
      title: "Few-shot learning of part-specific probability space for 3D shape segmentation",
      authors: "Lingjing Wang#, Xiang Li#, Yi Fang",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition, 2020",
      links: {}
    },
    {
      year: 2020,
      title: "Directionally constrained fully convolutional neural network for airborne LiDAR point cloud classification",
      authors: "Congcong Wen, Lina Yang, Xiang Li*, Ling Peng, Tianhe Chi",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 2020",
      links: {}
    },

    // 2019
    {
      year: 2019,
      title: "PC-Net: Unsupervised point correspondence learning with neural networks",
      authors: "Xiang Li, Lingjing Wang, Yi Fang",
      venue: "International Conference on 3D Vision, 2019",
      links: { paper: "https://www.ijcai.org/proceedings/2019/0399.pdf" }
    },
    {
      year: 2019,
      title: "Cross-Safe: A computer vision-based approach to make all intersection-related pedestrian signals accessible for the visually impaired",
      authors: "Xiang Li, Hanzhang Cui, John-Ross Rizzo, Edward Wong, Yi Fang",
      venue: "Science and Information Conference, 2019",
      links: { paper: "https://link.springer.com/chapter/10.1007/978-3-030-17798-0_13" }
    },
    {
      year: 2019,
      title: "A novel spatiotemporal convolutional long short-term neural network for air pollution prediction",
      authors: "Congcong Wen, Shufu Liu, Xiaojing Yao, Ling Peng, Xiang Li, Yuan Hu, Tianhe Chi",
      venue: "Science of the Total Environment, 2019",
      links: { paper: "https://arxiv.org/abs/1908.06673" }
    },
    {
      year: 2019,
      title: "A sample update-based convolutional neural network framework for object detection in large-area remote sensing images",
      authors: "Yuan Hu, Xiang Li, Nan Zhou, Lina Yang, Ling Peng, Sha Xiao",
      venue: "IEEE Geoscience and Remote Sensing Letters, 2019",
      links: { paper: "https://ieeexplore.ieee.org/document/8613920/" }
    },
    {
      year: 2019,
      title: "Arbicon-Net: Arbitrary continuous geometric transformation networks for image registration",
      authors: "Jianchun Chen, Lingjing Wang, Xiang Li, Yi Fang",
      venue: "Advances in Neural Information Processing Systems, 2019",
      links: { paper: "https://arxiv.org/abs/1908.06673", code: "https://github.com/nyummvc/Arbicon-Net" }
    },
    {
      year: 2019,
      title: "Dynamic feature fusion for semantic edge detection",
      authors: "Yuan Hu, Yunpeng Chen, Xiang Li, Jiashi Feng",
      venue: "International Joint Conference on Artificial Intelligence, 2019",
      links: { paper: "https://arxiv.org/abs/1902.09104" }
    },
    {
      year: 2019,
      title: "Coherent point drift networks: Unsupervised learning of non-rigid point set registration",
      authors: "Lingjing Wang, Xiang Li, Jianchun Chen, Yi Fang",
      venue: "arXiv, 2019",
      links: { paper: "https://arxiv.org/abs/1906.03039" }
    },
    {
      year: 2019,
      title: "Non-rigid point set registration networks",
      authors: "Lingjing Wang, Jianchun Chen, Xiang Li, Yi Fang",
      venue: "arXiv, 2019",
      links: { paper: "https://arxiv.org/abs/1904.01428" }
    },
    {
      year: 2019,
      title: "Short-term traffic forecast of urban bus stations based on long short-term memory",
      authors: "Gao-sheng Li, Ling Peng, Xiang Li, Tong Wu",
      venue: "Journal of Highway and Transportation Research and Development, 2019",
      links: {}
    },
    // 2018
    {
      year: 2018,
      title: "Building-A-Nets: Robust building extraction from high-resolution remote sensing images with adversarial networks",
      authors: "Xiang Li, Xiaojing Yao, Yi Fang",
      venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2018",
      links: { paper: "https://arxiv.org/abs/1910.05909", code: "https://ieeexplore.ieee.org/document/8453267" }
    },
    {
      year: 2018,
      title: "A novel evolution tree for analyzing the global energy consumption structure",
      authors: "Yuan Hu, Ling Peng, Xiang Li, Xiaojing Yao, Hui Lin, Tianhe Chi",
      venue: "Energy, 2018",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S0360544218301117" }
    },

    // 2017
    {
      year: 2017,
      title: "Long short-term memory neural network for air pollutant concentration predictions: Method development and evaluation",
      authors: "Xiang Li, Ling Peng, Xiaojing Yao, Shaolong Cui, Yuan Hu, Chengzeng You, Tianhe Chi",
      venue: "Environmental Pollution, 2017",
      links: { paper: "https://www.sciencedirect.com/science/article/pii/S0269749117307534" }
    },
    {
      year: 2017,
      title: "Dynamic monitoring of the largest freshwater lake in China using a new water index derived from high spatiotemporal resolution Sentinel-1A data",
      authors: "Haifeng Tian, Wang Li, Mingquan Wu, Ni Huang, Guodong Li, Xiang Li, Zheng Niu",
      venue: "Remote Sensing, 2017",
      links: { paper: "https://www.mdpi.com/2072-4292/9/6/521" }
    },

    // 2016
    {
      year: 2016,
      title: "Deep learning architecture for air quality predictions",
      authors: "Xiang Li, Ling Peng, Yuan Hu, Jing Shao, Tianhe Chi",
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
