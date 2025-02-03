import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Javascript",
        description: "Création d'un site web - utilisation de Javascript, gestion des évènements utilisateurs et manipulation des éléments du DOM.",
        difficulte: "Lors de l’implémentation de la suppression des projets, j’ai rencontré plusieurs défis : assurer la suppression d'un projet à la fois sur le serveur et en local, mettre à jour dynamiquement l’interface en supprimant les éléments du DOM après confirmation, gérer les erreurs en cas d’échec de la suppression côté serveur.",
        solution: "J’ai mis en place une fonction asynchrone supprimerProjet() qui envoie une requête DELETE à l’API. Une fois la suppression confirmée côté serveur (response.ok), j’ai mis à jour l’interface utilisateur en supprimant l’élément correspondant du DOM et en mettant à jour mon tableau local projets via filter(). J’ai également ajouté une gestion des erreurs pour informer l’utilisateur en cas de problème avec le serveur.",
        url: "https://projet3-omega.vercel.app/",
        urlGithub: "https://github.com/LianeCC/projet3",
        imageurl: "/images/homeprojet3.png",
    },
    {
        title: "App web avec react",
        description: "Implémentation du front-end d'une application avec React et React router - Configuration de la navigation, développement de composants React, utilisation de Sass, animations CSS",
        difficulte: "Lors de l’implémentation de la galerie d’images avec useState, j’ai été surpris par la manière dont React met à jour l’état de façon asynchrone. Au début, je pensais que setCurrentIndex(currentIndex + 1) modifierait immédiatement la valeur de currentIndex, mais cela entraînait des incohérences dans l’affichage des images.",
        solution: "J’ai découvert que la meilleure pratique était d’utiliser la fonction de mise à jour basée sur l’état précédent, ce qui m'a permis d'éviter les bugs liés à la fermeture des états et d'assurer une navigation fluide entre les images.",
        url: "https://projet5-eight.vercel.app/",
        urlGithub: "https://github.com/LianeCC/projet5",
        imageurl: "/images/homeprojet5.png",

    },
    {
        title: "Back end avec Node.js",
        description: "Création d'un serveur avec Express et connexion à la base de données MongoDB - Création d'une API RESTful, stockage de données sécurisé, gestion des utilisateurs et des droits.",
        difficulte: "Lors de l’implémentation du redimensionnement et de la conversion des images avec Sharp, j’ai rencontré des erreurs qui empêchaient certaines images d’être correctement traitées et enregistrées sur le serveur.",
        solution: "Après plusieurs tests, j’ai identifié que le problème venait d’une mauvaise gestion des chemins et d’un ordre d’exécution non optimal. J’ai corrigé cela en m’assurant que le dossier de stockage existait avant l’écriture et en ne supprimant le fichier original qu’après confirmation du bon fonctionnement de la transformation. Cela m’a permis d’améliorer la fiabilité du traitement des images.",
        url: "https://projet6-eight.vercel.app/",
        urlGithub: "https://github.com/LianeCC/projet6",
        imageurl: "/images/homeprojet6.png",

    },
    // Ajout d'autres projets à la suite
];

export const Projects = () => {
    return (
        <div className="w-full border-none">
            <Card className="w-full p-4 flex flex-col gap-4">
            <h2 className="font-caption text-4xl text-primary py-4">Projets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <Link href={project.url} target="_blank" className="group relative w-full max-h-[300px] overflow-hidden rounded-lg">
                                <Image 
                                    src={project.imageurl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    width={800}
                                    height={600}
                                />
                            </Link>
                            <div className="mt-2">
                                <p className="text-lg font-bold">{project.title}</p>
                                <p className="text-muted-foreground">{project.description}</p>
                                <p className="mt-4 text-lg text-primary">Difficulté & Solution </p>
                                <p className="text-muted-foreground">{project.difficulte}</p>
                                <p className="text-muted-foreground">{project.solution}</p>
                                <Link href={project.urlGithub} target="_blank" className="hover:text-primary">Voir sur GitHub</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};
