import { Canvas } from '@react-three/fiber'
import { Float, Text, RoundedBox } from '@react-three/drei'

function DataCube({ position, color, label }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
            <group position={position}>
                <RoundedBox args={[1.8, 1.8, 0.2]} radius={0.1} smoothness={4}>
                    <meshPhongMaterial color={color} transparent opacity={0.8} shininess={100} specular="#ffffff" />
                </RoundedBox>
                <Text
                    position={[0, 0, 0.15]}
                    fontSize={0.25}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={1.5}
                    textAlign="center"
                >
                    {label}
                </Text>
            </group>
        </Float>
    )
}

export default function DataFlowScene() {
    return (
        <div className="h-[400px] w-full">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <ambientLight intensity={1} />
                <pointLight position={[5, 5, 5]} intensity={1.5} />
                <pointLight position={[-5, -5, -5]} color="#7c3aed" intensity={1} />

                <DataCube position={[-2.5, 0, 0]} color="#3b82f6" label="Customer Data" />

                {/* Arrow or flow indicator could be added here */}

                <DataCube position={[0, 0, 0]} color="#7c3aed" label="AI Analysis" />

                <DataCube position={[2.5, 0, 0]} color="#00ffff" label="Smart Ads" />
            </Canvas>
        </div>
    )
}
