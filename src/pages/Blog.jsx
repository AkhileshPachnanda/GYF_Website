import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            publishedAt,
            image,
            body
        }`;

        client.fetch(query)
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="min-h-screen bg-brand-cream text-white flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-brand-cream text-white pt-32 pb-24">
            <div className="max-w-[1280px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                        Latest <span className="text-brand-blue underline decoration-wavy decoration-brand-blue underline-offset-8">Updates</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Insights, engineering deep-dives, and updates from the GYF team.
                    </p>
                </motion.div>

                {posts.length === 0 ? (
                    <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <p className="text-2xl font-serif italic text-gray-500">No posts found yet.</p>
                        <p className="text-gray-600 mt-2">Coming Soon.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all duration-300"
                            >
                                {post.image && (
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={urlFor(post.image).width(800).url()}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                )}
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                                        <Calendar size={14} />
                                        {new Date(post.publishedAt).toLocaleDateString()}
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold mb-4 group-hover:text-brand-blue transition-colors">
                                        {post.title}
                                    </h2>
                                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                                        Read Article <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
