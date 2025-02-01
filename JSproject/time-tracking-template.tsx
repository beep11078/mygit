import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const TimeExplorationTemplate = () => {
  const [date] = useState(new Date().toLocaleDateString());
  
  return (
    <div className="space-y-4 p-4">
      {/* Daily Log */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>일간 기록 - {date}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Energy Levels */}
            <div className="space-y-2">
              <h3 className="font-semibold">에너지 레벨</h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">아침</div>
                  <div className="text-lg font-bold">7/10</div>
                </div>
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">점심</div>
                  <div className="text-lg font-bold">8/10</div>
                </div>
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">저녁</div>
                  <div className="text-lg font-bold">6/10</div>
                </div>
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">밤</div>
                  <div className="text-lg font-bold">4/10</div>
                </div>
              </div>
            </div>
            
            {/* Activities */}
            <div className="space-y-2">
              <h3 className="font-semibold">주요 활동</h3>
              <div className="space-y-2">
                <div className="rounded border p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">10:00 - 유튜브 시청</span>
                    <span className="text-gray-500">1시간</span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    관찰: 아침에는 바로 일하기 어려운가봐. 천천히 시동이 필요한 타입일 수 있겠다.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Discoveries */}
            <div className="space-y-2">
              <h3 className="font-semibold">오늘의 발견</h3>
              <div className="rounded border p-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <p>창가 자리에서 집중이 더 잘되는 것 같다</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <p>비 오는 날 SNS를 더 많이 보게 된다</p>
                </div>
              </div>
            </div>
            
            {/* Next Experiments */}
            <div className="space-y-2">
              <h3 className="font-semibold">다음 실험 아이디어</h3>
              <div className="rounded border p-3">
                <p>아침에 15분 스트레칭 해보기</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Weekly Summary */}
      <Card>
        <CardHeader>
          <CardTitle>주간 정리</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">발견한 패턴</h3>
              <div className="rounded border p-3">
                <p>오전 시간대가 가장 생산적인 것 같다</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">다음 주 계획</h3>
              <div className="rounded border p-3">
                <p>오전 시간대에 중요한 업무 배치해보기</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeExplorationTemplate;
